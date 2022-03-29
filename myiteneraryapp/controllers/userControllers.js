const User = require('../models/usersModel')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')        
const nodemailer = require('nodemailer') 
const jwt = require('jsonwebtoken')



const sendEmail = async (email, uniqueString) => { 
console.log(email)
console.log(uniqueString)
    const transporter = nodemailer.createTransport({ 
        host: 'smtp.gmail.com',         
        port: 465,
        secure: true,
        auth: {
            user: "verifyusermytineraryapp@gmail.com",    
            pass: "verificaremail"                         
        }                                           
    })

   
    let sender = "verifyusermytineraryapp@gmail.com"  
    let mailOptions = { 
        from: sender,    
        to: email,       
        subject: "Verificacion de email usuario ", 
        html: `
        <div >
        <h1 style="color:red">Presiona <a href=http://localhost:4000/api/verify/${uniqueString}>aqui</a> para confirma tu email. Gracias </h1>
        </div>
        `
    
    };
    await transporter.sendMail(mailOptions, function (error, response) { 
        if (error) { console.log(error) }
        else {
            console.log("Mensaje enviado")

        }
    })
};




const usersControllers = {

    verifyEmail: async (req, res) => {

        const { uniqueString } = req.params; 

        const user = await User.findOne({ uniqueString: uniqueString })
        console.log(user) 
        if (user) {
            user.emailVerificado = true 
            await user.save()
            res.redirect("http://localhost:3000/") 
            
        }
        else { res.json({ success: false, response: "¡Your email has not been verified!" }) }
    },


    signUpUsers:async (req,res)=>{
        console.log(req.body)
        let {firtsName, lastName, email, password, photo, country, from,  } = req.body.userData
      const test = req.body.test

        try {
    
            const usuarioExiste = await User.findOne({ email }) 
            
            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) !== -1) {
                    console.log("resultado de if " +(usuarioExiste.from.indexOf(from) !==0 )) 
                    res.json({ success: false,
                               from:"signup", 
                               message: "¡You have already done your SignUp in this way, please SignIn!" })
                } else {
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                     
                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada) 
                    if(from === "form-Signup"){ 
                       
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await sendEmail(email, usuarioExiste.uniqueString) 
                    res.json({
                        success: true, 
                        from:"signup", 
                        message: "We sent you an email to validate it! Please check your box to complete the signUp and add it to your SignIN methods "
                    }) 
                    
                    }else{
                    
                    usuarioExiste.save()
                    
                    res.json({ success: true,
                               from:"signup", 
                               message: "we add "+from+ " to your means to perform signIn" })
                }
            }
            } else {
                
               
                const contraseñaHasheada = bcryptjs.hashSync(password, 10) 
            
                
                const nuevoUsuario = await new User({
                    firtsName,
                    lastName,
                    email,
                    password:[contraseñaHasheada],
                    photo,
                    country,
                    uniqueString:crypto.randomBytes(15).toString('hex'),
                    emailVerificado:false,
                    from:[from],
                    
                
                })
              
                
                if (from !== "form-Signup") { 
                    await nuevoUsuario.save()
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "Congratulations!, your user has been created with " +from
                    }) 
    
                } else {
                    
                   
                    await nuevoUsuario.save()
                    await sendEmail(email, nuevoUsuario.uniqueString) 
    
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "We sent you an email to validate it!, please check your box to complete the signUp "
                    }) 
                } 
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "opsss, something it`s wrong!, try it in a few minutes" }) 
        }
    },
    signInUser: async (req, res) => {

        const { email, password,  from } = req.body.logedUser
        try {
            const usuarioExiste = await User.findOne({ email })
           
            console.log(usuarioExiste.from)
            console.log(from)
            const indexpass = usuarioExiste.from.indexOf(from)
            console.log(usuarioExiste.password[indexpass])

            if (!usuarioExiste) {
                res.json({ success: false, message: "Your users have not been registered!, signUp" })

            } else {
                if (from !== "form-Signup") { 
                    
                    let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                    
                    if (contraseñaCoincide.length >0) { 
                       
                        const userData = {
                                        id:usuarioExiste._id,
                                        firtsName: usuarioExiste.firtsName,
                                        email: usuarioExiste.email,
                                        photo: usuarioExiste.photo,
                                        from:from
                                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn:  60* 60*24 })
                        

                        res.json({ success: true,  
                                   from:from,
                                   response: {token,userData }, 
                                   message:"Welcome again "+userData.firtsName,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not registered with "+from+"If you want to enter with this method you must do the signUp with " +from
                          })
                    }
                } else { 
                    if(usuarioExiste.emailVerificado){
                        
                        let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        console.log(contraseñaCoincide)
                        console.log("resultado de busqueda de contrasela: " +(contraseñaCoincide.length >0))
                        if(contraseñaCoincide.length >0){
                            
                        const userData = {
                            id: usuarioExiste._id,
                            firtsName: usuarioExiste.firtsName, 
                            email: usuarioExiste.email,
                            photo: usuarioExiste.photo,
                            from:from
                            }
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn:  60* 60*24 })
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData }, 
                            message:"Welcome again "+userData.firtsName,
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"The username or password do not match",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not verified your email, please check your email box to complete your signUp"
                          }) 
                    }

                } 
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something it`s wrong, try again in a few minutes" })
        }
    },
    signOutUser: async (req, res) => {
       
        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
        res.json(console.log('closed session! ' + email))
    },
    verificarToken:(req, res) => {
        console.log(req.user)
        if(!req.err){
        res.json({success:true,
                  response:{id:req.user.id, firtsName:req.user.firtsName,email:req.user.email, photo:req.user.photo, from:"token"},
                  message:"welcome again "+req.user.firtsName}) 
        }else{
            res.json({success:false,
            message:"Please signIn again"}) 
        }
    }

}
module.exports = usersControllers