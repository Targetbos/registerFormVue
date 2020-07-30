<template>
  <div class="add-client__container container">
    <form class="add-client__form" @submit.prevent="sendForm()">
      <section class="section">
        <h2>Регистрация нового клиента</h2>
        <FormInput title="Фамилия" name="lastName" placeholder="Фамилия" v-on:inputVal="valueInput" required />
        <FormInput title="Имя" name="firstName" placeholder="Имя" v-on:inputVal="valueInput" required/>
        <FormInput title="Отчество" name="middleName" placeholder="Отчество" v-on:inputVal="valueInput" />
        <FormInput title="Дата рождения" name="birthday" placeholder="Дата рождения" v-on:inputVal="valueInput" type="date" required/>
        <FormInput title="Номер телефона (в формате 79999999999)" name="phoneNumber" v-on:inputVal="valueInput" type="tel"/>
        <FormSelect title="Пол" name="gender" firstItem="Выберите пол" :items="[{value:'male',text:'Мужской'},{value:'female',text:'Женский'}]" v-on:inputVal="valueInput"/>
        <div class="form__selectBlock">
          <label class="form__inputTitle"> Группа клиентов
            <select name="clientGroup" class="form__select" v-model="groupClients" multiple size="3">
              <option value='vip'>VIP</option>
              <option value='problems'>Проблемные</option>
              <option value='oms'>ОМС</option>
            </select>    
          </label> 
        </div>
        <FormSelect title="Лечащий врач" name="doctor" firstItem="Выберите врача" :items="[{value:'ivanov',text:'Иванов'},{value:'zacharov',text:'Захаров'},{value:'tchernischeva',text:'Чернышова'}]" v-on:inputVal="valueInput"/>
        <FormCheckbox name="nosendSms" checkboxText="Не отправлять СМС" v-on:inputVal="valueInput" />
      </section>
      <section class="section">
        <HR/><h3>Адрес</h3><hr/>
        <FormInput title="Индекс" name="postalCode" placeholder="111111" maxLength="6" v-on:inputVal="valueInput" />
        <FormInput title="Страна" name="country" placeholder="Страна" v-on:inputVal="valueInput" />
        <FormInput title="Область" name="region" placeholder="Регион" v-on:inputVal="valueInput" />
        <FormInput title="Город" name="city" placeholder="Город" v-on:inputVal="valueInput" required />
        <FormInput title="Улица" name="street" placeholder="Улица" v-on:inputVal="valueInput" />
        <FormInput title="Дом" name="numberHome" placeholder="Дом" v-on:inputVal="valueInput" />
      </section>
      <section class="section">
        <HR/>
        <h3>Паспорт</h3>
        <hr/>
        <FormSelect title="Тип документа" name="documentType" firstItem="Выберите тип документа" :items="[{value:'passport',text:'Паспорт'},{value:'svidetelstvo',text:'Свидетельство о рождении'},{value:'vodUdostoverenie',text:'Вод. удостоверение'}]" v-on:inputVal="valueInput" required />
        <FormInput title="Серия" name="documentSeries" placeholder="Серия документа" v-on:inputVal="valueInput" />
        <FormInput title="Номер" name="documentNumber" placeholder="Номер документа" v-on:inputVal="valueInput" />
        <FormInput title="Кем выдан" name="documentIssued" placeholder="Кем выдан" v-on:inputVal="valueInput" />
        <FormInput title="Дата выдачи" type="date" name="dateIssuedDocument" placeholder="Дата выдачи" v-on:inputVal="valueInput" required />
        <sup style="color:red;">*</sup> <span style="font-size: 0.8rem;"> Поле обязательное для заполнения </span>
        <FormButton textBtn="Отправить" v-on:sendForm="sendForm"/>
      </section>
      <ModalWindow v-show="registerTrue" @modalClick="modalClose"/>
    </form>
  </div>  
</template>

<script>
import FormInput from "./FormInput.vue";
import FormSelect from "./FormSelect.vue";
import FormCheckbox from "./FormCheckbox.vue";
import FormButton from "./FormButton.vue";
import ModalWindow from "./ModalWindow.vue";
export default {
  name: "FormAddClient",
  data(){
    return{
      groupClients: [],
      registerTrue: false,
      dataClient: {}

    }
  },
  components: {
    FormInput,
    FormSelect,
    FormCheckbox,
    FormButton,
    ModalWindow
  },
  props: {

  },
  methods: {
    
    valueInput: function(value, name) {
        let group = this.groupClients;
        this.dataClient[`${name}`] = value;
        this.dataClient[`clientGroup`] = group;
    },

    sendForm: function() {
      this.registerTrue = true;
      console.log(this.dataClient)
      
    },
    modalClose: function(){
      this.registerTrue = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 2rem;
}
.form__select{
  overflow: hidden;
}
.add-client {
  &__container {
    width: 100%;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
  &__form {
    border-radius: 1rem;
    max-width: 80%;
    min-width: 19rem;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    box-shadow: 0 0 0.8rem 0 #999;
    background: #eee;
  }
}
</style>
