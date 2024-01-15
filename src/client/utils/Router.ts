import {render} from './render';
import Block from './Block';
import { Routes } from '..';

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

class Route {
  private _block: Block | null

  constructor(
    private pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string) {
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    this._block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this.blockClass({});
      render(this.query, this._block as Block);
      return;
    }
  }
}

class Router {
  private static __instance: Router;
  private routes: Route[];
  private _currentRoute: Route | null;
  private history: typeof window.history;
  private _query: string;

  constructor(query: string) {

    if (Router.__instance) {
      return Router.__instance;
    }

    this._query = query;
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this._query);

    this.routes.push(route);
    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      console.log(target.location.pathname);
      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      const notFoundRoute = this.getRoute(Routes.NotFound);
      notFoundRoute?.render();
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.navigate(pathname);
  }

  public go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  private getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default new Router('#app');
