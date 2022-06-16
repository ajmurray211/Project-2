import email_img from './images/134145_mail_email_icon.png'
const About = () => {
    return (
        <div className="about">
            <p>This website is designed for people that love nature. The intention is to be your one stop shop for all things hunting and fishing,
                currently this website is under construction. The operational portion of this site
                currently is the recipe portion. You can type in an animal or general recipe that you would like.
                For example try "pie" or "deer" and look at some recipes. You can favorite recipes that will appear
                at the bottom of your screen, you can click on the name you favorited and it will bring you to an
                in depth recipe for you to follow for that dish. Have fun and feel free to contact me if you
                find a bug or have a problem!
            </p>
            <a href="mailto:aj.murr4y@gmail.com" target="_blank"><img src={email_img} alt="Email contact"/></a>
        </div>
    );
}

export default About;