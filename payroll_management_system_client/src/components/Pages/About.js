
import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';


const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Navigate to ='/Dashboard'/> 
    }
return (
<section>
<section id="inner-headline">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <h2 className="pageTitle">About Payroll Management system</h2>
         </div>
      </div>
   </div>
</section>
<section id="content">
   <div className="container">
      <div className="about">
         <section className="features">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div>
                        <h2>About Payroll Management system</h2>
                           <p></p>
                           <p>A payroll management system is a software designed to manage the calculation of employee wages, deductions, taxes, insurance, and other financial obligations.</p>
                      </div>
                     <br/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="features-item">
                        <div className="features">
                           <div className="icon">
                              <i className="icon-map icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Payroll Management system</h3>
                              <p>Payroll Management means the administration of employee expenses within a company and the payment of wages to employees. </p>
                           </div>
                        </div>
                        <div className="features">
                           <div className="icon">
                              {/* <i className="icon-envelope-open icons"></i> */}
                           </div>
                           <div className="features-content">
                              {/* <h3>Salary Administration System</h3>
                              <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. </p> */}
                           </div>
                        </div>
                        <div className="features">
                           <div className="icon">
                              <i className="icon-badge icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Login Administration System</h3>
                              <p>Login administration includes registering and removing employee details . </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <img className="img-responsive" src="img/home.jpeg" alt="" />
                  </div>
               </div>
            </div>
         </section>
      </div>
   </div>
</section>
</section>
)
}
Landing.propTypes={
isAuthenticated:PropTypes.bool
}
const mapStateToProps =state=>
 ({
isAuthenticated:state.auth.isAuthenticated
 })

export default connect(mapStateToProps)(Landing);
