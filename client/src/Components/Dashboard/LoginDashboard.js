import React, { Component } from 'react';

class LoginDashboard extends Component {
  
  render() {
    return (
      <div className='logindash'>
      <div className='row' style={{marginTop: '6%', marginBottom: '8%', marginLeft:'3%'}}>
          <div className='col'>
              <div class="card" style={{width: '18rem' }}>
                  <img src="./AdminSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">System Admin</h5>
                      <br/><br/>
                      <a href="/login" class="btn btn-primary">Login</a>&nbsp;
                      <a href="/register" class="btn btn-success">SignUp</a>
                    
                  </div>
              </div>
          </div>

          <div className='col'>
              <div class="card" style={{ width: '18rem' }}>
                  <img src="./StuSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">Student</h5>
                      <br/><br/>
                      <a href="/login1" class="btn btn-primary">Login</a>&nbsp;
                      <a href="/register1" class="btn btn-success">SignUp</a>
                    
                  </div>
              </div>
          </div>

          <div className='col'>
              <div class="card" style={{ width: '18rem' }}>
                  <img src="./SupervSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">Supervisor/Co-supervisor</h5>
                      <br/><br/>
                      <a href="/login2" class="btn btn-primary">Login</a>&nbsp;
                      <a href="/register2" class="btn btn-success">SignUp</a>
                     
                  </div>
              </div>
          </div>

          <div className='col'>
              <div class="card" style={{ width: '18rem' }}>
                  <img src="./PanelSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">Panel Member</h5>
                      <br/><br/>
                      <a href="/login3" class="btn btn-primary">Login</a>&nbsp;
                      <a href="/register3" class="btn btn-success">SignUp</a>
                    
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
    
    }
}
export default LoginDashboard;