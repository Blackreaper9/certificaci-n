import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const CentrosDeAyuda = () => {
    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff4081' }}>
                        Centros de Ayuda
                    </Card.Title>
                    <Card.Text className="text-center" style={{ fontStyle: 'italic', color: '#555' }}>
                        Aquí encontrarás información sobre centros de ayuda para mujeres en situaciones de violencia.
                    </Card.Text>
                    <Card/>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <strong style={{ color: '#ff4081' }}>Instituto Nacional de las Mujeres (INMUJERES)</strong><br />
                            Descripción: INMUJERES promueve la igualdad de género y el empoderamiento de las mujeres.<br />
                            <strong>¿Cómo ayuda?</strong> Proporciona asesoría legal, apoyo psicológico y recursos informativos para mujeres en situaciones de violencia. Ofrece orientación sobre cómo acceder a servicios públicos y denunciar la violencia de género.<br />
                            Página web: <a href="https://www.gob.mx/inmujeres" target="_blank" rel="noopener noreferrer">https://www.gob.mx/inmujeres</a><br />
                            Teléfono: 01 800 911 25 11
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <strong style={{ color: '#ff4081' }}>Línea Nacional Contra la Violencia</strong><br />
                            Descripción: Línea telefónica gratuita de atención a mujeres víctimas de violencia doméstica o de género.<br />
                            <strong>¿Cómo ayuda?</strong> Brinda apoyo inmediato y confidencial a las mujeres que sufren violencia, ofreciendo orientación sobre los primeros pasos a seguir, cómo protegerse, y acceso a refugios y servicios legales.<br />
                            Página web: <a href="https://www.gob.mx/conavim" target="_blank" rel="noopener noreferrer">https://www.gob.mx/conavim</a><br />
                            Teléfono: 01 800 422 42 46
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong style={{ color: '#ff4081' }}>Centro de Justicia para las Mujeres</strong><br />
                            Descripción: Ofrecen atención integral a mujeres víctimas de violencia con servicios especializados.<br />
                            <strong>¿Cómo ayuda?</strong> Proveen asistencia legal, refugio temporal, apoyo psicológico y social. Además, facilitan el acceso a programas de capacitación laboral y asesoramiento para la reintegración social y económica de las mujeres afectadas.<br />
                            Página web: <a href="https://www.gob.mx/sesnsp/acciones-y-programas/centros-de-justicia-para-las-mujeres" target="_blank" rel="noopener noreferrer">https://www.gob.mx/sesnsp/acciones-y-programas/centros-de-justicia-para-las-mujeres</a><br />
                            Teléfono: Consulta la página para el centro más cercano.
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong style={{ color: '#ff4081' }}>Fundación Origen</strong><br />
                            Descripción: Brindan apoyo emocional y orientación para mujeres en situación vulnerable mediante su línea de ayuda.<br />
                            <strong>¿Cómo ayuda?</strong> Ofrecen asistencia telefónica para orientación psicológica y legal, y conectan a las mujeres con servicios de apoyo en sus comunidades. También cuentan con programas de empoderamiento económico.<br />
                            Página web: <a href="https://www.origenac.org" target="_blank" rel="noopener noreferrer">https://www.origenac.org</a><br />
                            Teléfono: 01 800 015 16 17
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong style={{ color: '#ff4081' }}>Línea de la Mujer</strong><br />
                            Descripción: Línea telefónica de atención inmediata para mujeres que sufren violencia o acoso.<br />
                            <strong>¿Cómo ayuda?</strong> Ofrecen orientación psicológica de emergencia y ayudan a las mujeres a planificar su seguridad. También brindan información sobre cómo acceder a refugios y apoyo legal en casos de violencia doméstica.<br />
                            Teléfono: 55 5658 1111
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong style={{ color: '#ff4081' }}>Centro de Justicia para Mujeres (Fiscalía)</strong><br />
                            Descripción: Es una institución que brinda apoyo y servicio integral a las mujeres aguascalentenses así como a sus hijos e hijas que han sido víctimas de los delitos relacionados con la violencia de género.<br />
                            <strong>¿Cómo ayuda?
                            </strong> El Centro de Justicia para Mujeres busca evitar la re-victimización proporcionando a las usuarias las herramientas necesarias para que trasciendan de un estado de víctima, a ser AGENTES PROMOTORAS DE PAZ en su comunidad.<br />
                            Página web: <a href="https://www.fiscalia-aguascalientes.gob.mx/Centro_de_Justicia_para_las_Mujeres.aspx" target="_blank" rel="noopener noreferrer">https://www.fiscalia-aguascalientes.gob.mx/Centro_de_Justicia_para_las_Mujeres.aspx</a><br />
                            Teléfono: (01 449) 9-74-82-31
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong style={{ color: '#ff4081' }}>Función de la dependencia (Instituto Municipal de la Mujer de Aguascalientes)</strong><br />
                            Descripción: Promover los principios rectores de acceso de todas las mujeres a una vida libre de violencia; igualdad jurídica entre las mujeres y el hombre; el respeto a la dignidad Humana de las mujeres; la no discriminación y la libertad de las mujeres.<br />
                            <strong>¿Cómo ayuda?
                            </strong>Se brinda apoyo integral en casos de violencia.<br />
                            Página web: <a href="https://www.ags.gob.mx/cont.aspx?p=4829" target="_blank" rel="noopener noreferrer">https://www.ags.gob.mx/cont.aspx?p=4829</a><br />
                            Teléfono: (449) 978-95-92
                        </ListGroup.Item>

                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CentrosDeAyuda;
