import { connect } from "react-redux";
import Controls from "./Controls";
import s from "./Counter.module.css";
import Value  from "./Value";

function Counter({value}){
    return (
      <div className={s.Counter}>
        Counter
        {/* <Value value={value}/> */}
        {/* <Controls
          onIncriment={this.handleIncrement}
          onDicriment={this.handleDicrement}
        /> */}

      </div>
    );
};

const mapStateToProps = state => {
  return {
    value: state.counterValue,
  }
}

export default connect()(Counter);
