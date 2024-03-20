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
                {/* Insert your logo here */}
              </div>
              <h2>Passenger Exit Form</h2>
              <form className="exit-form">
                <div className="form-group">
                  <label htmlFor="reason">Reason for Exit *</label>
                  <select id="reason" name="reason">
                    <option value="" disabled selected>Select Reason for Exit</option>
                    {/* Populate options with reasons */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="cisfName">CISF Officer Name *</label>
                  <input type="text" id="cisfName" name="cisfName" placeholder="Enter CISF Officer Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="cisfId">CISF Officer ID No. *</label>
                  <input type="text" id="cisfId" name="cisfId" placeholder="Enter CISF Officer ID No." />
                </div>
                <div className="form-group">
                  <label htmlFor="staffName">Airline Staff Name *</label>
                  <input type="text" id="staffName" name="staffName" placeholder="Enter Airline Staff Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="staffId">Airline Staff ID No. *</label>
                  <input type="text" id="staffId" name="staffId" placeholder="Enter Airline Staff ID No." />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  };