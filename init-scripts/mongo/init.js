print('Início da execução do script');

db = db.getSiblingDB('metrobh');
print('Banco de dados "metrobh" selecionado/criado');

  print('Tentando criar o usuário "metrobh"');
  db.createUser({
    user: "metrobh",
    pwd: "UniqHub123",
    roles: [
      {
        role: "readWrite",
        db: "metrobh"
      }
    ],
  });
  print('Usuário "metrobh" criado com sucesso no banco de dados "metrobh" com autenticação SCRAM-SHA-1.');