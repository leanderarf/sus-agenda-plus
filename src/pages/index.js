import './home.css';

const Home = () => {
    return (
        <section className='home'>
            <div className='hero'>
                <img className='hero_image' src='/images/Home.png' alt='Banner Home SUS Agenda+' />
                <a className='hero_button' href='#'>
                    Agendar Agora
                </a>
            </div>
            <div className='funcionalidades'>
                <h2>Como Funciona</h2>
                <ul className='funcionalidades_list'>
                    <li className='funcionalidades_item'>
                        <img className='cadastro' src='/icons/cadastro.png' alt='Ícone de Cadastro' />
                        <h3>Cadastro</h3>
                        <p>Paciente cria seu perfil com número do cartão SUS</p>
                    </li>
                    <li className='funcionalidades_item'>
                        <img className='agendamento'src='/icons/agendamento.png' alt='Ícone de Agendamento' />
                        <h3>Agendamento</h3>
                        <p>Escolhe unidade, especialidade e horário disponíveis</p>
                    </li>
                    <li className='funcionalidades_item'>
                        <img className='confirmacao' src='/icons/confirmacao.png' alt='Ícone de Confirmação' />
                        <h3>Confirmação</h3>
                        <p>Recebe notificação por e-mail ou SMS</p>
                    </li>
                    <li className='funcionalidades_item'>
                        <img className='historico' src='/icons/historico.png' alt='Ícone de Histórico' />
                        <h3>Histórico</h3>
                        <p>Consulta registros de atendimentos anteriores</p>
                    </li>
                </ul>
                <p className='funcionalidade_rodape'>O sistema reduz filas, otimiza o tempo e facilita o acesso aos serviços públicos.</p>
            </div>
            <div className='vantagens'>
                <h2>Vantagens</h2>
                <div className='vantagens_conteudo'>
                    <ul className='vantagens_list'>
                        <li className='vantagens_item'>
                            <img className='acessibilidade' src='/icons/acessibilidade.png' alt='Ícone de Acessibilidade digital' />
                            <h3>Acessibilidade digital</h3>
                            <p>Interface simples e responsiva</p>
                        </li>
                        <li className='vantagens_item'>
                            <img className='transparencia' src='/icons/transparencia.png' alt='Ícone de Transparência' />
                            <h3>Transparência</h3>
                            <p>Histórico e notificações automáticas</p>
                        </li>
                        <li className='vantagens_item'>
                            <img className='eficiencia' src='/icons/eficiencia.png' alt='Ícone de Eficiência' />
                            <h3>Eficiência</h3>
                            <p>Menos faltas e mais controle para as unidades</p>
                        </li>
                    </ul>
                </div>
                <img className='vantagens_image' src='/images/Home_Vantagens.png' alt='Imagem modelo de funcionários e engrenagem acima de suas cabeças. Nuvens ao fundo' />
            </div>
        </section>
    )
}

export default Home;