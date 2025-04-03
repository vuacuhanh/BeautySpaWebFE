import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import './footer.css';
const Footer= () => {
  return (
    <footer id="footer"  class="footer">
			<div className="container">
				{/* Phần chính của footer */}
				<div className="footer-main row">
				{/* Cột 1: Giới thiệu và tải ứng dụng */}
				<div className="col-md-4 mb-4">
					<div className="footer-brand">
					<Link to="/" className="navbar-brand">
						<img src="../../assets/logo/logo-transparent.png" alt="Lookme Logo" />
					</Link>
					<p className="mt-3 text-white">
						Hello.
					</p>
					<div className="app-download-links mt-3">
						<a href="" target="_blank" rel="noopener noreferrer">
						<img src="" alt="App Store" />
						</a>
						<a href="" target="_blank" rel="noopener noreferrer" className="ms-2">
						<img src="" alt="Google Play" />
						</a>
					</div>
					</div>
				</div>

				{/* Cột 2: Thông tin */}
				<div className="col-md-4 mb-4">
					<div className="row">
					{/* Cột con 1: Giới thiệu */}
					<div className="col-6">
						<h5 className="footer-title text-white">Giới thiệu</h5>
						<ul className="footer-menu-item">
						<li><Link to="#" className="text-white">Về Lookme</Link></li>
						<li><Link to="#" className="text-white">Thông tin tức</Link></li>
						<li><Link to="#" className="text-white">Biz Đồ</Link></li>
						<li><Link to="#" className="text-white">Chuyện khách hàng</Link></li>
						<li><Link to="#" className="text-white">Chuyện giới thiệu quy trình chấp nhận</Link></li>
						<li><Link to="#" className="text-white">Đăng ký tốc độ</Link></li>
						</ul>
					</div>
					{/* Cột con 2: Chuyện Mỹ Phẩm và Khám phá */}
					<div className="col-6">
						<h5 className="footer-title text-white">Chuyện Mỹ Phẩm</h5>
						<ul className="footer-menu-item">
						<li><Link to="#" className="text-white">Salon Mi và Móng</Link></li>
						<li><Link to="#" className="text-white">Spa Chăm Sóc Da</Link></li>
						<li><Link to="#" className="text-white">Massage Gội Đầu</Link></li>
						<li><Link to="#" className="text-white">Thẩm Mỹ Nha Khoa</Link></li>
						<li><Link to="#" className="text-white">Salon Tóc Make-up</Link></li>
						</ul>
						<h5 className="footer-title text-white mt-4">Khám phá</h5>
						<ul className="footer-menu-item">
						<li><Link to="#" className="text-white">Địa điểm phổ biến</Link></li>
						<li><Link to="#" className="text-white">Địa điểm gần bạn</Link></li>
						<li><Link to="#" className="text-white">Địa điểm lịch sử</Link></li>
						</ul>
					</div>
					</div>
				</div>

				{/* Cột 3: Công đồng Lookme và liên hệ */}
				<div className="col-md-4 mb-4">
					<h5 className="footer-title text-white">Công đồng Lookme</h5>
					<ul className="footer-menu-item">
					<li>
						<Link to="#" className="text-white">
						<FontAwesomeIcon icon={FacebookFilled} className="me-2" /> Cộng đồng Lookme
						</Link>
					</li>
					<li>
						<Link to="#" className="text-white">
						<FontAwesomeIcon icon={InstagramFilled} className="me-2" /> Instagram
						</Link>
					</li>
					<li>
						<Link to="#" className="text-white">
						<FontAwesomeIcon icon={YoutubeFilled} className="me-2" /> Youtube
						</Link>
					</li>
					</ul>
					<h5 className="footer-title text-white mt-4">Hợp tác cùng Lookme</h5>
					<p className="text-white">Hãy nhanh tay hợp tác với Lookme để tìm kiếm thêm khách hàng.</p>
					<Link to="#" className="btn btn-primary mt-2">Tìm hiểu</Link>
				</div>
				</div>
			</div>
			<div id="scroll-Top">
				<div class="return-to-top">
					<i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
			</div>
        </footer>
  )
}

export default Footer
