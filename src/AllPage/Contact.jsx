import './All.css'
function Contact(){
    return(
        <>
        <div id="contact">
        <h2><span>Contact</span></h2>
        <form>
          <div>
              <div className='text_label'>
                <label for="name">Name <span>*</span></label>
              </div>
              <input type="text" name="name" id="name"placeholder="Name" />
          </div>
          <div>
              <div className='text_label'>
                <label for="number">Number <span>*</span></label>
              </div>
              <input type="tel" name="number" id="number"placeholder="Number" />
          </div>
          <div>
            <div className='text_label'>
              <label for="email">Email <span>*</span></label>
            </div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
              <div className='text_label'>
                <label for="message">Message <span>*</span></label>
              </div>
              <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
          </div>
          <button type="submit">Submit</button>
      </form>
      </div>
        </>
    );
}
export default Contact;