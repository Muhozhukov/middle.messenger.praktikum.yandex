import {render} from './render.ts';
import Block from './Block.ts';

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

class Route {
  private block: Block | null;

  constructor(
    private pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string) {
  }

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});

      render(this.query, this.block as Block);
      return;
    }
  }
}

export class Router {
  private static __instance?: Router;
  private routes: Route[] = [];
  private currentRoute: Route | null = null;
  private history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];

    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this.rootQuery);
    this.routes.push(route);

    return this;
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);

    this._onRoute(pathname);
  }

  public back() {
    // console.log('back')
    // console.log(this.currentRoute.pathname)
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;
      this._onRoute(target.location.pathname);
    }

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      // const notFoundRoute = this.getRoute(Routes.NotFound);
      // if (notFoundRoute) notFoundRoute.render();
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  public reset() {
    delete Router.__instance;

    new Router(this.rootQuery);
  }

  private getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default new Router('#app');
