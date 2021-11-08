import { Action, ActionTypes } from '../types/action.ts';
import { ArrayType, BasicType } from '../types/basic.ts';

export default class BaseUtils {
  public trim(): Action {
    return new Action(ActionTypes.Trim);
  }

  public increment(value: number = 1): Action {
    return new Action(ActionTypes.Increment, value);
  }

  public append(value: BasicType | ArrayType): Action {
    return new Action(
      ActionTypes.Append,
      Array.isArray(value) ? value : [value]
    );
  }

  public prepend(value: BasicType | ArrayType): Action {
    return new Action(
      ActionTypes.Prepend,
      Array.isArray(value) ? value : [value]
    );
  }
}
