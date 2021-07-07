import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123");

const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("1");

const cliente = new Cliente("Lais", 221212121, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


