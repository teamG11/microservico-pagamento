import { Cliente } from "@/Domain/Entities/Cliente";
import { IClienteRepository } from "@/Interfaces/Repositories/IClienteRepository";

export class ClienteTestRepository implements IClienteRepository {
	public clientes: Cliente[] = [];

	async findByCPFAsync(cpf: string) {
		const cliente = this.clientes.find(cliente => cliente.cpf === cpf);
		return cliente ?? null;
	}

	async saveAsync(cliente: Cliente) {
		const novoCliente: Cliente = {
			nome: cliente.nome,
			sobrenome: cliente.sobrenome,
			cpf: cliente.cpf,
		}

		this.clientes.push(novoCliente);
		return novoCliente;
	}
}
