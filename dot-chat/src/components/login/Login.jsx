// src/components/Login.jsx

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="login-left">
        <h1>DotChat: Desenvolva sua própria assistente virtual</h1>
        <p>
          Bem-vindo ao dotchat! Criamos um chat com IA especializada para cada contexto,
          seja atendimento ou vendas. Tenha contato com assistentes virtuais altamente 
          especializados em um único lugar, tornando suas interações mais eficientes e 
          convenientes.
        </p>
      </div>
      <div className="login-right">
        <div className="bg-white w-4/6 rounded-lg py-5 px-16">
          <div className="flex flex-col">
            <p className='text-2xl font-bold'>Comece com DotChat</p>
            <p>Crie uma conta e interaja com diferentes IA</p>
            <form className='flex flex-col'>
              <label>Email</label>
              <input type="email" placeholder="Digite seu email" />
              
              <label>Usuário</label>
              <input type="text" placeholder="Digite o nome do usuário que deseja utilizar" />
              
              <button type="submit" className='text-white w-full'>Avançar</button>
            </form>

            <div className="">
              <button className="google-login">Entre com o Google</button>
            </div>

            <p> Você já tem uma conta? <a href="/login">Entrar</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
