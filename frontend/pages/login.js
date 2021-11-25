import { useRouter } from 'next/dist/client/router';
import Script from 'next/script'
import { useState } from 'react'

function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:5000/login', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            // credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });

        await router.push('/');
    }

    return (
        <>
            <div className="login_page">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form>
                            <h1>Tạo tài khoản mới</h1>
                            <div className="w-100 position-relative">
                                <div className="w-100">
                                    <input type="text" name="usr" className="form-control " placeholder="Tên đăng nhập" value="" required />
                                </div>
                            </div>
                            <div className="w-100 position-relative"><div className="w-100">
                                <input type="password" name="pwd" className="form-control " placeholder="Mật khẩu" value="" required />
                            </div>
                            </div>
                            <div className="w-100 position-relative">
                                <div className="row">
                                    <div className="col-8">
                                        <input type="text" name="firstName" className="form-control " placeholder="Họ" value="" required />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" name="lastName" className="form-control " placeholder="Tên" value="" required />
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 position-relative">
                                <div className="w-100">
                                    <input type="email" name="email" className="form-control " placeholder="Email" value="" required />
                                </div>
                            </div>
                            <div className="w-100 position-relative">
                                <div className="w-100">
                                    <input type="number" name="phoneNumber" className="form-control " placeholder="Số điện thoại" value="" required />
                                </div>
                            </div>
                            <div className="w-100 position-relative">
                                <div className="w-100">
                                    <input type="text" name="address" className="form-control " placeholder="Địa chỉ" value="" required />
                                </div>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline my-2 text-align-left w-100 pl-0">
                                <span className="mx-2">Giới tính:</span>
                                <div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customerGender1" name="customerGender" className="custom-control-input" checked />
                                        <label className="custom-control-label" for="customerGender1">Nam</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customerGender2" name="customerGender" className="custom-control-input" />
                                        <label className="custom-control-label" for="customerGender2">Nữ</label>
                                    </div>
                                </div>
                            </div>
                            <button type="button">Đăng ký</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={submit}>
                            <h1>Đăng nhập</h1>
                            <div className="social-container">
                                <a href="a.html" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="a.html" className="social"><i className="fa fa-google" aria-hidden="true"></i></a>
                                <a href="a.html" className="social"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                            <span>hoặc sử dụng tài khoản</span>
                            <div className="w-100 position-relative">
                                <div className="w-100">
                                    <input type="text" name="usr" className="form-control " placeholder="Nhập Tên đăng nhập" required="" onChange={e => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div className="w-100 position-relative">
                                <div className="w-100">
                                    <input type="password" name="pwd" className="form-control " placeholder="Nhập Mật khẩu" required="" onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <a href="a.html">Quên mật khẩu</a>
                            <button type="button">Đăng nhập</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Bạn đã có tài khoản?</h1>
                                <p>Để kết nối với chúng tôi, vui lòng đăng nhập.</p>
                                <button className="ghost" id="signIn">Đăng nhập</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Khách hàng mới?</h1>
                                <p>Đăng ký thông tin và tham gia cùng chúng tôi</p>
                                <button className="ghost" id="signUp">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Script>
                {`
                    var signUpButton = document.getElementById('signUp');
                    var signInButton = document.getElementById('signIn');
                    var container = document.getElementById('container');
                    
                    signUpButton.addEventListener('click', () => {
                        container.classList.add("right-panel-active");
                    });
                    
                    signInButton.addEventListener('click', () => {
                        container.classList.remove("right-panel-active");
                    });
                `}
            </Script>
        </>
    )
}

export default login
