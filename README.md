<h1>Frontend Doc</h1>

Desenvolvi o frontend utilizando Next.js, Taliwind CSS e Chakra UI.
[Necessário Node v16.8.0 ou superior]

## Parte 1 - Construindo as interfaces de autenticação. </br> 

A princípio iria utilizar React, mas quando fui utilizar o react-router acabei comparando com o roteamento do Next.js e observando grandes vantagens, não só no roteamento (com as rotas baseadas nos arquivos), como pelo fato de poder adotar SSR. Portanto, resolvi utilizar o Next.js para obter, também, uma boa performance e por consquência boa experiência do usuário. </br> 

Comecei definindo quais seriam as formas de estilizar meu site de forma rápida e eficaz. Por isso escolhi utilizar os components do ChakraUI juntamente com a estilização do Tailwind CSS. </br> 

</br> 

<strong>Next Auth</strong> </br> 
Escolhi essa biblioteca para construir um eficiente sistema de Autenticação no frontend no lado do servidor (SSR), visto que essa lib irá cuidar da abstração da autenticação, com diversas funcionalidades de segurança nativas, além de ser simples de implementar e também por ter integração com o AWS Cognito (o provider escolhido). </br>

Visto que eu desejo realizar a persistência do usuário autenticado, eu criei novas migrations seguindo os models da documentação do Next Auth. </br>

Após testar e validar a autenticação com Cognito, então adiciono o adapter do Prisma para então conseguir persistir as informações do Callback do Cognito dentro da minha instância SQLite. </br>

Por fim crio o layout de autenticação. </br>

</br>

<strong>Login Component utilizando Tailwind Components</strong> </br> 
Nesse momento opto por utilizar a biblioteca de components do Tailwind para obter um template de Login de forma otimizada. O meu propósito é o quanto antes implementar a aplicação toda funcionando, portanto, utilizo recursos que facilitam o trabalho. </br>

</br>























