<template>
  <section aria-label="응원정보 상세 화면">
    {{ pageTitle }}
    <button class="btn__primary--lg" @click="changeModifyMode">수정</button>
    <article class="form__box">
      <!-- 응원도구 Id -->
      <div class="flex flex-1">
        <label class="form__label">응원도구 ID</label>
        <div class="flex-1">
          <input
            v-model="form.basicInfo.id"
            type="text"
            readonly
            placeholder="등록 후 자동 생성됩니다."
            class="form__input form__input--300"
          />
        </div>
      </div>
      <!-- 응원도구 명-->
      <div class="flex items-center mt-2">
        <label class="form__label">응원도구 명</label>
        <div class="flex-1">
          <input
            v-model="form.basicInfo.toolNm"
            type="text"
            class="form__input"
            maxlength="200"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 응원도구 영문명 -->
      <div class="flex items-center mt-2">
        <label class="form__label">응원도구 영문명</label>
        <div class="flex-1">
          <input
            v-model="form.basicInfo.toolNmEng"
            type="text"
            class="form__input"
            maxlength="200"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 연동프로토콜 구분 -->
      <div class="flex items-center mt-2">
        <label class="form__label">연동프로토콜 구분 </label>
        <div class="form__radio">
          <input
            id="interworking-protocol-type-a"
            v-model="form.basicInfo.protocolType"
            type="radio"
            value="BEATRO_V"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="interworking-protocol-type-a">BEATRO_V</label>
        </div>
        <div class="form__radio">
          <input
            id="interworking-protocol-type-b"
            v-model="form.basicInfo.protocolType"
            type="radio"
            value="FANLIGHT_V"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="interworking-protocol-type-b">FANLIGHT_V</label>
        </div>
        <div class="form__radio">
          <input
            id="interworking-protocol-type-c"
            v-model="form.basicInfo.protocolType"
            type="radio"
            value="FANLIGHT_V2"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="interworking-protocol-type-c">FANLIGHT_V2 </label>
        </div>
      </div>
      <!-- 디바이스 이름 -->
      <div class="flex items-center mt-2">
        <label class="form__label">디바이스 이름</label>
        <div class="flex-1">
          <input
            v-model="form.basicInfo.deviceNm"
            type="text"
            class="form__input form__input--300"
            :readonly="mode === 'read'"
          />
          <span class="ml-2 form__infotext">
            &#8251; 블루투스 연동 시 (제조사 부여한)디바이스 이름 (응원도구-APP
            통신에 사용)
          </span>
        </div>
      </div>
      <!-- 모델명 -->
      <div class="flex items-center mt-2">
        <label class="form__label">모델명</label>
        <div class="flex-1">
          <input
            v-model="form.basicInfo.modelNm"
            type="text"
            class="form__input form__input--300"
            :readonly="mode === 'read'"
          />
          <span class="ml-2 form__infotext">
            &#8251; SM 내부 관리용(서버-APP 통신에 사용)
          </span>
        </div>
      </div>
      <!-- 펌웨어 업데이트용 디바이스 이름 -->
      <div class="flex items-center mt-2">
        <label class="form__label text-sm"
          >펌웨어 업데이트용 디바이스 이름</label
        >
        <div class="flex-1">
          <input
            v-model="form.basicInfo.firmwareUpDeviceNm"
            type="text"
            class="form__input form__input--300"
            :readonly="mode === 'read'"
          />
          <span class="ml-2 form__infotext">
            &#8251; 펌웨어 업데이트 후 서버-APP 통신에 사용
          </span>
        </div>
      </div>
      <!-- 펌웨어 버전 -->
      <div class="flex items-center mt-2">
        <label class="form__label">펌웨어 버전</label>
        <div class="flex-1">
          <input
            v-model="form.basicInfo.firmwareVar"
            type="text"
            class="form__input form__input--300"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 펌웨어 업데이트 여부 -->
      <div class="flex items-center mt-2">
        <label class="form__label">펌웨어 업데이트 여부 </label>
        <div class="form__radio">
          <input
            id="firmware-updata-y"
            v-model="form.basicInfo.firmwareUpYn"
            type="radio"
            value="Y"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="firmware-updata-y">YES</label>
        </div>
        <div class="form__radio">
          <input
            id="firmware-updata-n"
            v-model="form.basicInfo.firmwareUpYn"
            type="radio"
            value="N"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="firmware-updata-n">No</label>
        </div>
      </div>
      <!-- 펌웨어 Url -->
      <div class="flex items-center mt-2">
        <label
          class="form__label"
          :class="{
            'form__label--required':
              mode !== 'read' && form.basicInfo.firmwareUpYn === 'Y',
          }"
          >펌웨어 URL</label
        >
        <div class="flex-1">
          <input
            v-model="form.basicInfo.firmwareUrl"
            type="text"
            class="form__input"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 노출여부 -->
      <div class="flex items-center mt-2">
        <label class="form__label">노출여부 </label>
        <div class="form__radio">
          <input
            id="cheering-tool-exposureYn-n"
            v-model="form.basicInfo.exposureYn"
            type="radio"
            value="N"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="cheering-tool-exposureYn-n">비노출</label>
        </div>
        <div class="form__radio">
          <input
            id="cheering-tool-exposureYn-y"
            v-model="form.basicInfo.exposureYn"
            type="radio"
            value="Y"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="cheering-tool-exposureYn-y">노출</label>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import pageMode from '@/mixin/pageMode'
export default {
  name: 'CheeringToolDetail',
  mixins: [pageMode],
  data() {
    return {
      form: {
        basicInfo: {
          id: '',
          toolNm: '',
          toolNmEng: '',
          protocolType: 'BEATRO_V',
          deviceNm: '',
          modelNm: '',
          firmwareUpDeviceNm: '',
          firmwareVar: '',
          firmwareUpYn: 'Y',
          firmwareUrl: '',
          exposureYn: 'N',
        },
      },
    }
  },
  methods: {
    changeModifyMode() {
      // 수정
      this.isModify = true
    },
  },
}
</script>

<style lang="scss" scoped></style>
