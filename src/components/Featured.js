import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { growLink, shrinkLink } from '../animations'


const Featured = () => {
    return (
        <section style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center', marginTop: 50 }}>Lo más pedido</h2>
            <Grid container style={{ marginTop: 50, marginBottom: 50 }}>
                <Grid item lg={3} md={6} xs={12}>
                    <a href='#' style={{ textDecoration: 'none', color: '#000' }} onMouseEnter={() => growLink('pizzas')} onMouseLeave={() => shrinkLink('pizzas')}>
                        <div style={{ textAlign: 'center', height: 300 }}>
                            <img id='pizzas' src='../img/pizzas.png' style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <h3>Pizzas</h3>
                        </div>
                    </a>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <a href='#' style={{ textDecoration: 'none', color: '#000' }} onMouseEnter={() => growLink('pastas')} onMouseLeave={() => shrinkLink('pastas')}>
                        <div style={{ textAlign: 'center', height: 300 }}>
                            <img id='pastas' src='../img/pasta.png' style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <h3>Pastas</h3>
                        </div>
                    </a>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <a href='#' style={{ textDecoration: 'none', color: '#000' }} onMouseEnter={() => growLink('ensaladas')} onMouseLeave={() => shrinkLink('ensaladas')}>
                        <div style={{ textAlign: 'center', height: 300 }}>
                            <img id='ensaladas' src='../img/ensalada.png' style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <h3>Ensaladas</h3>
                        </div>
                    </a>
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <a href='#' style={{ textDecoration: 'none', color: '#000' }} onMouseEnter={() => growLink('alhorno')} onMouseLeave={() => shrinkLink('alhorno')}>
                        <div style={{ textAlign: 'center', height: 300 }}>
                            <img id='alhorno' src='../img/alhorno.png' style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <h3>Al Horno</h3>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Button style={{ backgroundColor: '#f44747', color: '#fff' }}>Ver Menú Completo</Button>
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

export { Featured }