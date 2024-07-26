
const Contact = () => {
  return (
<div className="contact-container">
		<main className="row">
			
			

			<section className="col left">
				
			

				<div className="contactTitle">
					<h2>Get In Touch</h2>
					<p>I value your feedback and am committed to providing a timely response. </p>
				</div>



				<div className="contactInfo">
					
					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-phone"></i>
						</div>
						<div className="details">
							<span>Phone</span>
							<span>01074470704</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-envelope"></i>
						</div>
						<div className="details">
							<span>Email</span>
							<span>suraabdisa2019@gmail.com</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-location-dot"></i>
						</div>
						<div className="details">
							<span>Location</span>
							<span>Sasagn, Busan, South Korea</span>
						</div>
					</div>

				</div>

			

				<div className="socialMedia">
					<a href="https://www.facebook.com/sura.habtamu.3?mibextid=LQQJ4d"><i className="fa-brands fa-facebook-f"> </i></a>
					<a href="https://www.twitter"><i className="fa-brands fa-twitter"></i></a>
					<a href="https://www.instagram.com/lucky_9uard?igsh=MXFlNjE3bmFvOTl4cA%3D%3D&utm_source=qr"><i className="fa-brands fa-instagram"></i></a>
					<a href="https://www.linkedin.com/in/sura-habtamu-abdissa-0270a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin-in"></i></a>
				</div>
                

			</section>

		

			<section className="col right">
				
		

				<form className="messageForm">
					
					<div className="inputGroup halfWidth">
						<input type="text" name="" required="required"/>
						<label>Your Name</label>
					</div>

					<div className="inputGroup halfWidth">
						<input type="email" name="" required="required"/>
						<label>Email</label>
					</div>

					<div className="inputGroup fullWidth">
						<input type="text" name="" required="required"/>
						<label>Subject</label>
					</div>

					<div className="inputGroup fullWidth">
						<textarea required="required"></textarea>
						<label>Say Something</label>
					</div>

					<div className="inputGroup fullWidth">
						<button className="send-button">Send Message</button>
					</div>

				</form>

			
			</section>

		</main>
	</div>
  )

};
export default Contact;
