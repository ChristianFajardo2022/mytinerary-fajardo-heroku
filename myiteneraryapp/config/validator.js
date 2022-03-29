const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        firtsName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'firtsName / El NOMBRE debe contener mas de 3 caracteres',
            'string.max':"firtsName / El nombre debe contener como maximo 20 caracteres"
        }),
        lastName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'lastName / El NOMBRE debe contener mas de 3 caracteres',
            'string.max':"lastName / El nombre debe contener como maximo 20 caracteres"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Formato incorrecto de email'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'El password debe contener minimo 8 caracteres y contener mayuscula, minuscula y numero',
            'string.pattern':"El password debe ser alphanumerico y contener un numero"
        }),
        photo: joi.string().min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'photo / El NOMBRE debe contener mas de 3 caracteres',
            
        }),
        
        from:joi.string(),
        country:joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
       
    if (validation.error) {
        
        return res.json({success: false, from:"validator", message:validation.error.details, test: validation})
        
    }
    
    next()
    
    
}

module.exports = validator