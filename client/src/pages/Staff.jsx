import { Header } from "./Header";
import { Footer } from "./Footer";

export const Staff = () => {
    return (
      <>
        <Header />
        <main className="main">
          <section className="section-login">
            <div className="container">
            <div className="logo-container">
              <img src="/photos/main_logo.png" alt="Logo" />
            </div>
              <div className="login-form">
                <h2>Passenger Exit Form</h2>
                <form className="exit-form">
                  <div className="form-group">
                    <label htmlFor="reason">Reason for Exit *</label>
                    <br/>
                    <select id="reason" name="reason" className="input-field" required>
                      <option value="" disabled>Select Reason</option>
                      <option value="illness">Illness</option>
                      <option value="injury">Injury</option>
                      <option value="emergency">Emergency At Home</option> 
                    </select>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="cisfName">CISF Officer Name *</label>
                    <input type="text" id="cisfName" name="cisfName" placeholder="Enter CISF Officer Name" className="input-field" required />
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="cisfId">CISF Officer ID No. *</label>
                    <input type="text" id="cisfId" name="cisfId" placeholder="Enter CISF Officer ID No." className="input-field" required />
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="staffName">Airline Staff Name *</label>
                    <input type="text" id="staffName" name="staffName" placeholder="Enter Airline Staff Name" className="input-field" required />
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="staffId">Airline Staff ID No. *</label>
                    <input type="text" id="staffId" name="staffId" placeholder="Enter Airline Staff ID No." className="input-field" required />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>

              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
};

