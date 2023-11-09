//for boilerplat signup.html file

const router = require("express").Router()

router.post("/signup", (req, res) => {
    //save all the data as needed 
    const user = User.create(req.body);

    req.session.save(() => {
        if ( !req.session.user) {
            req.session.user = {
                ...req.session,
                 //clone antyhing already inreq.session and then add in what you want to make into a new session
                 user: {
                    id: user.id
                 }
            }
            }
            res.json({ status: "succes", msg: "signup success"})
        })

    })

