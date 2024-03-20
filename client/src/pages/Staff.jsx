import { Header } from "./Header";
import { Footer } from "./Footer";

export const Staff = () => {
    return (
      <>
        <Header />
        <main>
          <section className="section-next-page">
            <div className="container">
              <div className="logo-container">
                <img src="/photos/logo.png" alt="Logo" />
              </div>
              <h2>Passenger Exit Form</h2>
              <form className="exit-form">
                <div className="form-group">
                  <label htmlFor="reason">Reason for Exit *</label>
                  <br/>
                  <select id="reason" name="reason">
                    <option value="" disabled selected>Select Reason</option>
                    <option value="illness">Illness</option>
                    <option value="illness">Injury</option>
                    <option value="illness">Emergency At Home</option>
                  </select>
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="cisfName">CISF Officer Name *</label>
                  <input type="text" id="cisfName" name="cisfName" placeholder="Enter CISF Officer Name" />
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="cisfId">CISF Officer ID No. *</label>
                  <input type="text" id="cisfId" name="cisfId" placeholder="Enter CISF Officer ID No." />
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="staffName">Airline Staff Name *</label>
                  <input type="text" id="staffName" name="staffName" placeholder="Enter Airline Staff Name" />
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="staffId">Airline Staff ID No. *</label>
                  <input type="text" id="staffId" name="staffId" placeholder="Enter Airline Staff ID No." />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  };