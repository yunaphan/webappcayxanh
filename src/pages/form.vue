<template>
  <f7-page>
    <f7-navbar title="Form" back-link="Back"></f7-navbar>
    <f7-block-title>Mẫu thêm cây xanh</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Số hiệu</f7-label>
        <f7-input type="text" placeholder="Số hiệu"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Tên cây xanh</f7-label>
        <f7-input type="select">
          <option selected>Bàng</option>
          <option>Sao</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Kinh độ</f7-label>
        <f7-input placeholder="Kinh độ"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Vĩ độ</f7-label>
        <f7-input placeholder="Vĩ độ"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Chiều cao</f7-label>
        <f7-input placeholder="Chiều cao"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Đường kính</f7-label>
        <f7-input placeholder="Đường kính"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Độ rộng tán</f7-label>
        <f7-input placeholder="Độ rộng tán"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Tên cây xanh</f7-label>
        <f7-input type="select">
          <option selected>Male</option>
          <option>Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item>
      <f7-list-item title="Toggle">
        <f7-toggle slot="after"></f7-toggle>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Slider</f7-label>
        <f7-input>
          <f7-range min="0" max="100" value="50" step="1" :label="true"></f7-range>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Textarea</f7-label>
        <f7-input type="textarea" placeholder="Bio"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Resizable</f7-label>
        <f7-input type="textarea" placeholder="Bio" resizable></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Checkbox group</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" checkbox name="my-checkbox" :value="n" :title="'Checkbox ' + n"></f7-list-item>
    </f7-list>

    <f7-block-title>Radio buttons group</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n" :title="'Radio ' + n"></f7-list-item>
    </f7-list>

    <f7-block-title>Buttons</f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-button class="col">Button</f7-button>
        <f7-button class="col" fill>Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" raised>Raised</f7-button>
        <f7-button class="col" raised fill>Raised Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" round>Round</f7-button>
        <f7-button class="col" round fill>Round Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" outline>Outline</f7-button>
        <f7-button class="col" round outline>Outline Round</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" small outline>Small</f7-button>
        <f7-button class="col" small round outline>Small Round</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" small fill>Small</f7-button>
        <f7-button class="col" small round fill>Small Round</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" big raised>Big</f7-button>
        <f7-button class="col" big fill raised>Big Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" big fill raised color="red">Big Red</f7-button>
        <f7-button class="col" big fill raised color="green">Big Green</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
export default {}
</script>
