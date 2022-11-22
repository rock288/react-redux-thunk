import dashboardImg from '../../../assets/images/dashboard.svg';
import './index.scss';

function Body() {
  return (
    <div className="text-center dashboard-body">
      <div className="h-25 d-flex align-items-center justify-content-center">
        <p className="h4">Welcome to Demo App</p>
      </div>
      <img className="w-50 h-50" src={dashboardImg} alt="" />
    </div>
  );
}

export default Body;
