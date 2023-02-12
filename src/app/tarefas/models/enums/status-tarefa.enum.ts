export enum StatusTarefaEnum {
  AguardandoInicio = 0,
  Andamento = 1,
  Concluida = 2,
  Cancelada = 3
}

export const StatusTarefaEnumMapeamento: Record<StatusTarefaEnum, string> = {
  [StatusTarefaEnum.AguardandoInicio]: "Aguardando Inicio",
  [StatusTarefaEnum.Andamento]: "Andamento",
  [StatusTarefaEnum.Concluida]: "Concluída",
  [StatusTarefaEnum.Cancelada]: "Cancelada"
}
