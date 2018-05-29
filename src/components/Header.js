import React, {
	Component
} from 'react';

//
class Header extends Component {
	render() {
		return (
			<div id="navbar-container" className="boxed">
          		<div className="navbar-header">
					<a href="/Home/index/index" className="navbar-brand">
						<img src={require('../assets/images/logo.png')} alt="Nifty Logo" className="brand-icon" />
						<div className="brand-title">
							<span className="brand-text">滴宝</span>
						</div>
					</a>
				</div>
				<div className="navbar-content clearfix">
					<ul className="nav navbar-top-links pull-left">
						<li className="tgl-menu-btn">
							<a className="mainnav-toggle" href="/Home/index/index">
								<i className="demo-pli-view-list"></i>
							</a>
						</li>
						<li className="dropdown message">
							<a href="/Home/index/index" data-toggle="dropdown" className="dropdown-toggle">
								<i className="demo-pli-bell"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-md">
								<div className="bord-btm">
									<a href="/Home/push/noticemanagelist" className="pad-all btn-block">你有0条信息</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
      		</div>
		);
	}
}

export default Header;