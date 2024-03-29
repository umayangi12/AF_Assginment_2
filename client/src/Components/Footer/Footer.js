import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
      
      <footer class="footer">
      
      <div class="container">
      <ul class="foote_bottom_ul_amrc">
      <li><a href="/">Home</a></li>
      <li><a href="/aboutus">Dashboard</a></li>
      <li><a href="#">Resources</a></li>
      <li><a href="/contactus">Student Support</a></li>
      </ul>
      
      <p class="text-center">Copyright @2022 | Designed With by <a href="#" class="footerTxt">Research Project Management Tool</a></p>
      
      <ul class="social_footer_ul">
      <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
      <li><a href="http://linkedin.com/"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="http://instagram.com/"><i class="fab fa-instagram"></i></a></li>
      </ul>
      
      </div>
      
      </footer>
      
      </div>
    )
  }
}

