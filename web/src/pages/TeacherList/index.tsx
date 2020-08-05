import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';

export default () => (
    <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
            <form id="search-teachers">
                <div className="input-block">
                    <label>
                        Matéria
                        <input type="text" />
                    </label>
                </div>

                <div className="input-block">
                    <label>
                        Dia da semana
                        <input type="text" />
                    </label>
                </div>

                <div className="input-block">
                    <label>
                        Hora
                        <input type="text" />
                    </label>
                </div>
            </form>
        </PageHeader>

        <main>
            <TeacherItem />
        </main>
    </div>
);