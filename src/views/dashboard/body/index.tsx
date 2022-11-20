import dashboardImg from '../../../assets/images/dashboard.svg';
import './index.scss';

function Body() {
  return (
    <div className="text-center dashboard-body">
      <p className="h2">Welcome to Demo App</p>
      <img src={dashboardImg} alt="" />
    </div>
  );
}

export default Body;
