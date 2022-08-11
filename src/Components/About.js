import email_img from './images/134145_mail_email_icon.png'
const About = () => {
    return (
        <div className="about">
            <p>
                This website is designed for people that love nature. The intention is to be your one stop shop for all things hunting and fishing.
                Currently this website is under construction. The operational portion of this site is the fishing page and the recipes page.
                 The hunting option has animals inputted but no data collected. If you see a fish/animal with incorrect data 
                 or you want to help contribute by adding an animal you hunt in your area or giving me information on an animal 
                 feel free to contact me with the animal and information! Email the information to me by clicking the link below and
                  I will get to work! For the recipe page you can type in an animal or general recipe that you would like. For example try 
                  "pie" or "deer" and look at some recipes. You can favorite recipes that will appear at the bottom of your screen, you can click 
                  on the name you favorited and it will bring you to an in depth recipe for you to follow for that dish.
            </p>
            <a href="mailto:aj.murr4y@gmail.com" target="_blank"><img src={email_img} alt="Email contact" /></a>
        </div>
    );
}

export default About;