import Block from "./Block";
import { EventBus } from "./EventBus";
import { set } from "./helpers";
import isEqual from "./isEqual";

type Indexed<T = unknown> = {
  [key in string]: T;
};

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Indexed = {}

  public getState(): Indexed {
    return this.state
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export function withStore(mapStateToProps: (state: Indexed) => Indexed) {
  return function(Component: typeof Block) {
    return class extends Component {
      constructor(props: any) {
        let state = mapStateToProps(store.getState());
        super({...props, ...state});

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());
          if (!isEqual(state, newState)) {
            this.setProps({...newState});
          }
          state = newState;
        });
      }
    }
  }
}

// function mapUserToProps(state) {
//   return {
//     name: state.user.name,
//     avatar: state.user.avatar,
//   };
// }

const store = new Store();
export default store;
// export default new Store();
