import style from './page.module.scss'

export function EventDescription(){
    return(
        <div className={style.event_description_content}>
            <div className={style.event_description_content_info}>
                <div className={style.event_description_content_info_header}>
                    <h1>Nome da Atividade</h1>
                    <p>Palestrado por: NOME DO PALESTRANTE</p>
                </div>
                
                <div className={style.event_description_content_info_main}>
                    <h4>Descrição</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos dolores ea commodi. Minima et rem aspernatur amet quo, exercitationem quasi eaque totam. Eius ducimus voluptates cum, amet modi earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis rem aspernatur numquam repudiandae tempora qui, aperiam autem nulla.</p>
                </div>
                
            </div>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.4076247943317!2d-48.3630927253395!3d-10.182593289932347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb42b5bdc9e3%3A0xc8bc313ba13e5ae4!2sUNITINS%20-%20Campus%20Palmas!5e1!3m2!1spt-BR!2sbr!4v1747881751697!5m2!1spt-BR!2sbr" 
                    width="600"
                    height="250"  
                    style={{borderRadius: '24px'}} 
                    loading="eager">
                </iframe>
        </div>
    );
}