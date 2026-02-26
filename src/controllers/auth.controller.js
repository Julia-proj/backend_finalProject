import { registerUser, loginUser } from '../services/auth.service.js';

// El patrón es siempre el mismo: try { llama service, envía res } catch { next(error) }

export const register = async (req, res, next) => { 
  try {
    // req.body contiene { name, email, password } — viene del JSON del cliente
    const result = await registerUser(req.body);    
    res.status(201).json(result);                    
  } catch (error) {
    next(error);  
  }
};

export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);
    res.json(result);   
  } catch (error) {
    next(error);
  }
};