import React from "react";

import PageHeader from "../../components/PageHeader/index";
import Input from "../../components/Input";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";

const TeachList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Máteria" />

          <Input name="week_day" label="Dia da semana" />

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeachList;
