import { connect } from "react-redux";
import Controls from "./Controls";
import * as actions from '../../redux/actions'
import s from "./Counter.module.css";
import Value  from "./Value";

function Counter({value,step, onIncrement,onDecrement }){
    return (
      <div className={s.Counter}>
        
        <Value value={value}/>
        <Controls
          step={step}
          onIncriment={()=>onIncrement(step)}
          onDicriment={()=>onDecrement(step)}
        />

      </div>
    );
};

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: (value) => dispatch(actions.increment(value)),
    onDecrement: (value) => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
