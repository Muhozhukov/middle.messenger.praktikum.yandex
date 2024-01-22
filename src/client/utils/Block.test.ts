import esmock from 'esmock';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './Block.ts'

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
}

describe('Block', () => {
  let ComponentMock: typeof BlockType;

  before(async () => {
    const { default: Block } = await esmock('./Block', {
      './EventBus': {
        EventBus: class {
          emit = eventBusMock.emit;
          on = eventBusMock.on;
        }
      }
    }) as { default: typeof BlockType };

    ComponentMock = class extends Block {
    }
  });

  it('should subscribe to INIT, CDM, CDU, CDR events', () => {
    new ComponentMock({});

    const events = ['init', 'flow:component-did-mount', 'flow:component-did-update', 'flow:render'];
    const resEvents = eventBusMock.on.args.map((e) => e[0]);

    expect(resEvents).to.include.members(events);
  });

  it('should fire init event on initialization', () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });

  it('should fire CDU event on props update', () => {
    const components = new ComponentMock({});

    components.setProps({ test: 'test' });

    expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(true);
  });

  it('get props by prop name', () => {
    const components = new ComponentMock({})

    components.setProps({ test: 'test getProps' });

    expect(components.getProps('test')).to.be.eq('test getProps')
  });
});
