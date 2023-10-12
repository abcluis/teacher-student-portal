import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="g-sidenav-show  bg-gray-100">
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start " id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand d-flex align-items-center m-0" href=" https://demos.creative-tim.com/corporate-ui-dashboard/pages/dashboard.html " target="_blank">
            <span className="font-weight-bold text-lg">Corporate UI</span>
          </a>
        </div>
        <div className="collapse navbar-collapse px-4  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link  active" href="../pages/dashboard.html">
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">

                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="../pages/tables.html">
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">

                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="../pages/wallet.html">
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">

                </div>
                <span className="nav-link-text ms-1">Wallet</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="../pages/rtl.html">
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">

                </div>
                <span className="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li className="nav-item mt-2">
              <div className="d-flex align-items-center nav-link">

                <span className="font-weight-normal text-md ms-2">Account Pages</span>
              </div>
            </li>
            <li className="nav-item border-start my-0 pt-2">
              <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/profile.html">
                <span className="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li className="nav-item border-start my-0 pt-2">
              <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/sign-in.html">
                <span className="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li className="nav-item border-start my-0 pt-2">
              <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/sign-up.html">
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer mx-4 ">
          <div className="card border-radius-md" id="sidenavCard">
            <div className="card-body  text-start  p-3 w-100">
              <div className="mb-3">

              </div>
              <div className="docs-info">
                <h6 className="font-weight-bold up mb-2">Need help?</h6>
                <p className="text-sm font-weight-normal">Please check our docs.</p>
                <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/corporate-ui-dashboard" target="_blank" className="font-weight-bold text-sm mb-0 icon-move-right mt-auto w-100 mb-0">
                  Documentation
                  <i className="fas fa-arrow-right-long text-sm ms-1" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <nav className="navbar navbar-main navbar-expand-lg mx-5 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
          <div className="container-fluid py-1 px-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Dashboard</a></li>
                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
              </ol>
              <h6 className="font-weight-bold mb-0">Dashboard</h6>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body bg-white  border-end-0 ">

                  </span>
                  <input type="text" className="form-control ps-0" placeholder="Search" />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0">

                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">

                  </a>
                  <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="javascript:;">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img src="../assets/img/team-2.jpg" className="avatar avatar-sm border-radius-sm  me-3 " />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">New message</span> from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                              <i className="fa fa-clock opacity-6 me-1"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="javascript:;">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img src="../assets/img/small-logos/logo-google.svg" className="avatar avatar-sm border-radius-sm bg-gradient-dark p-2  me-3 " />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">New report</span> by Google
                            </h6>
                            <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                              <i className="fa fa-clock opacity-6 me-1"></i>
                              1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item border-radius-md" href="javascript:;">
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto">

                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                              <i className="fa fa-clock opacity-6 me-1"></i>
                              2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ps-2 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0">
                    <img src="../assets/img/team-2.jpg" className="avatar avatar-sm" alt="avatar" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid py-4 px-5">
          <div className="row">
            <div className="col-md-12">
              <div className="d-md-flex align-items-center mb-3 mx-2">
                <div className="mb-md-0 mb-3">
                  <h3 className="font-weight-bold mb-0">Hello, Noah</h3>
                  <p className="mb-0">Apps you might like!</p>
                </div>
                <button type="button" className="btn btn-sm btn-white btn-icon d-flex align-items-center mb-0 ms-md-auto mb-sm-0 mb-2 me-2">
                  <span className="btn-inner--icon">
                    <span className="p-1 bg-success rounded-circle d-flex ms-auto me-2">
                      <span className="visually-hidden">New</span>
                    </span>
                  </span>
                  <span className="btn-inner--text">Messages</span>
                </button>
                <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0">
                  <span className="btn-inner--icon">

                  </span>
                  <span className="btn-inner--text">Sync</span>
                </button>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="row">
            <div className="position-relative overflow-hidden">
              <div className="swiper mySwiper mt-4 mb-2">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div>
                      <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                        <div className="full-background bg-cover"></div>
                        <div className="card-body text-start px-3 py-0 w-100">
                          <div className="row mt-12">
                            <div className="col-sm-3 mt-auto">
                              <h4 className="text-dark font-weight-bolder">#1</h4>
                              <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                              <h5 className="text-dark font-weight-bolder">Secured</h5>
                            </div>
                            <div className="col-sm-3 ms-auto mt-auto">
                              <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                              <h5 className="text-dark font-weight-bolder">Banking</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                      <div className="full-background bg-cover" ></div>
                      <div className="card-body text-start px-3 py-0 w-100">
                        <div className="row mt-12">
                          <div className="col-sm-3 mt-auto">
                            <h4 className="text-dark font-weight-bolder">#2</h4>
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                            <h5 className="text-dark font-weight-bolder">Cyber</h5>
                          </div>
                          <div className="col-sm-3 ms-auto mt-auto">
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                            <h5 className="text-dark font-weight-bolder">Security</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                      <div className="full-background bg-cover" ></div>
                      <div className="card-body text-start px-3 py-0 w-100">
                        <div className="row mt-12">
                          <div className="col-sm-3 mt-auto">
                            <h4 className="text-dark font-weight-bolder">#3</h4>
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                            <h5 className="text-dark font-weight-bolder">Alpha</h5>
                          </div>
                          <div className="col-sm-3 ms-auto mt-auto">
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                            <h5 className="text-dark font-weight-bolder">Blockchain</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                      <div className="full-background bg-cover" ></div>
                      <div className="card-body text-start px-3 py-0 w-100">
                        <div className="row mt-12">
                          <div className="col-sm-3 mt-auto">
                            <h4 className="text-dark font-weight-bolder">#4</h4>
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                            <h5 className="text-dark font-weight-bolder">Beta</h5>
                          </div>
                          <div className="col-sm-3 ms-auto mt-auto">
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                            <h5 className="text-dark font-weight-bolder">Web3</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                      <div className="full-background bg-cover"></div>
                      <div className="card-body text-start px-3 py-0 w-100">
                        <div className="row mt-12">
                          <div className="col-sm-3 mt-auto">
                            <h4 className="text-dark font-weight-bolder">#5</h4>
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                            <h5 className="text-dark font-weight-bolder">Gama</h5>
                          </div>
                          <div className="col-sm-3 ms-auto mt-auto">
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                            <h5 className="text-dark font-weight-bolder">Design</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                      <div className="full-background bg-cover" ></div>
                      <div className="card-body text-start px-3 py-0 w-100">
                        <div className="row mt-12">
                          <div className="col-sm-3 mt-auto">
                            <h4 className="text-dark font-weight-bolder">#6</h4>
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                            <h5 className="text-dark font-weight-bolder">Rompro</h5>
                          </div>
                          <div className="col-sm-3 ms-auto mt-auto">
                            <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                            <h5 className="text-dark font-weight-bolder">Security</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>

        </div>

        <div class="card border shadow-xs mb-4">
          <div class="card-header border-bottom pb-0">
            <div class="d-sm-flex align-items-center">
              <div>
                <h6 class="font-weight-semibold text-lg mb-0">Members list</h6>
                <p class="text-sm">See information about all members</p>
              </div>
              <div class="ms-auto d-flex">
                <button type="button" class="btn btn-sm btn-white me-2">
                  View all
                </button>
                <button type="button" class="btn btn-sm btn-dark btn-icon d-flex align-items-center me-2">
                  <span class="btn-inner--icon">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="d-block me-2">
                      <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                    </svg>
                  </span>
                  <span class="btn-inner--text">Add member</span>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body px-0 py-0">
            <div class="border-bottom py-3 px-3 d-sm-flex align-items-center">
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradiotable" id="btnradiotable1" autocomplete="off" checked="" />
                <label class="btn btn-white px-3 mb-0" for="btnradiotable1">All</label>
                <input type="radio" class="btn-check" name="btnradiotable" id="btnradiotable2" autocomplete="off" />
                <label class="btn btn-white px-3 mb-0" for="btnradiotable2">Monitored</label>
                <input type="radio" class="btn-check" name="btnradiotable" id="btnradiotable3" autocomplete="off" />
                <label class="btn btn-white px-3 mb-0" for="btnradiotable3">Unmonitored</label>
              </div>
              <div class="input-group w-sm-25 ms-auto">
                <span class="input-group-text text-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                  </svg>
                </span>
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </div>
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="text-secondary text-xs font-weight-semibold opacity-7">Member</th>
                    <th class="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Function</th>
                    <th class="text-center text-secondary text-xs font-weight-semibold opacity-7">Status</th>
                    <th class="text-center text-secondary text-xs font-weight-semibold opacity-7">Employed</th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex align-items-center">
                          <img src="../assets/img/team-2.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user1" />
                        </div>
                        <div class="d-flex flex-column justify-content-center ms-1">
                          <h6 class="mb-0 text-sm font-weight-semibold">John Michael</h6>
                          <p class="text-sm text-secondary mb-0">john@creative-tim.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-dark font-weight-semibold mb-0">Manager</p>
                      <p class="text-sm text-secondary mb-0">Organization</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm border border-success text-success bg-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm font-weight-normal">23/04/18</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                        <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex align-items-center">
                          <img src="../assets/img/team-3.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user2" />
                        </div>
                        <div class="d-flex flex-column justify-content-center ms-1">
                          <h6 class="mb-0 text-sm font-weight-semibold">Alexa Liras</h6>
                          <p class="text-sm text-secondary mb-0">alexa@creative-tim.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                      <p class="text-sm text-secondary mb-0">Developer</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm font-weight-normal">11/01/19</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                        <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex align-items-center">
                          <img src="../assets/img/team-1.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user3" />
                        </div>
                        <div class="d-flex flex-column justify-content-center ms-1">
                          <h6 class="mb-0 text-sm font-weight-semibold">Laurent Perrier</h6>
                          <p class="text-sm text-secondary mb-0">laurent@creative-tim.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-dark font-weight-semibold mb-0">Executive</p>
                      <p class="text-sm text-secondary mb-0">Projects</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm border border-success text-success bg-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm font-weight-normal">19/09/17</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                        <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex align-items-center">
                          <img src="../assets/img/marie.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user4" />
                        </div>
                        <div class="d-flex flex-column justify-content-center ms-1">
                          <h6 class="mb-0 text-sm font-weight-semibold">Michael Levi</h6>
                          <p class="text-sm text-secondary mb-0">michael@creative-tim.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                      <p class="text-sm text-secondary mb-0">Developer</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm border border-success text-success bg-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm font-weight-normal">24/12/08</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                        <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex align-items-center">
                          <img src="../assets/img/team-5.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user5" />
                        </div>
                        <div class="d-flex flex-column justify-content-center ms-1">
                          <h6 class="mb-0 text-sm font-weight-semibold">Richard Gran</h6>
                          <p class="text-sm text-secondary mb-0">richard@creative-tim.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-dark font-weight-semibold mb-0">Manager</p>
                      <p class="text-sm text-secondary mb-0">Executive</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm font-weight-normal">04/10/21</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                        <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex align-items-center">
                          <img src="../assets/img/team-6.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user6" />
                        </div>
                        <div class="d-flex flex-column justify-content-center ms-1">
                          <h6 class="mb-0 text-sm font-weight-semibold">Miriam Eric</h6>
                          <p class="text-sm text-secondary mb-0">miriam@creative-tim.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-dark font-weight-semibold mb-0">Programtor</p>
                      <p class="text-sm text-secondary mb-0">Developer</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm font-weight-normal">14/09/20</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                        <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                        </svg>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="border-top py-3 px-3 d-flex align-items-center">
              <p class="font-weight-semibold mb-0 text-dark text-sm">Page 1 of 10</p>
              <div class="ms-auto">
                <button class="btn btn-sm btn-white mb-0">Previous</button>
                <button class="btn btn-sm btn-white mb-0">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div >
  );
}

export default App;
