class ProcessoElements {

    btnFilstrarProcesso = () => ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'

    btnBuscar = () => '.MuiCollapse-wrapperInner > .MuiButtonBase-root > .MuiButton-label'

    buscaPorProcesso = () => '/html/body/div/div[2]/div/div/div[1]/div[1]/div/div/div/div[2]/div/div/input'

    tituloBuscaProcesso = () => '.makeStyles-primeiraColuna-23 > :nth-child(1) > :nth-child(2)'

    btnEditarProcesso = () => '.MuiGrid-root > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root > path'

    tituloTelaEdicao = () => '.MuiPaper-root > .MuiTypography-root'

    inputEditarDescricaoProcesso = () => '.MuiGrid-grid-xs-12 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'

    btnSalvarAtualizacao = () => '.makeStyles-btnSalvar-21 > .MuiButton-label'

    descricaoCardProcessp = () => ':nth-child(2) > :nth-child(3) > :nth-child(2)'

    inputOrgao = () => ':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'

    inputAno = () => ':nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'

    inputDescricao = () => '.MuiGrid-grid-xs-12 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'

    inputAssunto = () => ':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'

    inputInteressado = () => ':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'

    btnSalvarProcesso = () => '.makeStyles-btnSalvar-21 > .MuiButton-label'

    campoIdProcesso = () => '.makeStyles-primeiraColuna-23 > :nth-child(1) > :nth-child(2)'

}

export const processoElements = new ProcessoElements()