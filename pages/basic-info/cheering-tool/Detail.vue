<template>
  <section aria-label="응원정보 상세 화면" class="CheeringTool">
    <!-- 기본정보 -->
    <article class="form__box">
      <!-- 응원도구 Id -->
      <div class="flex items-center">
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
    <!-- 응원도구 대표이미지  -->
    <article class="form__box flex items-center">
      <label class="form__label">응원도구 대표이미지</label>
      <!-- 업로드 된 파일 -->
      <div class="flex-1 flex">
        <div class="flex items-bottom mr-4">
          <img
            class="form__file--img mr-2"
            :src="form.imgInfo.mainThumbnail.imgSrc"
            alt=""
          />
          <div v-if="form.imgInfo.mainThumbnail" class="self-end">
            <p class="form__infotext">
              파일 사이즈 : {{ form.imgInfo.mainThumbnail.width }} x
              {{ form.imgInfo.mainThumbnail.height }}
            </p>
            <p class="form__infotext">
              {{ form.imgInfo.mainThumbnail.imgName }}
              <button
                v-if="mode !== 'read'"
                type="button"
                class="form__file--delete"
              >
                <span class="hide">삭제</span>
              </button>
            </p>
          </div>
        </div>
        <div v-if="mode !== 'read'" class="form__file--btn self-end">
          <label for="fileUpdate">찾기</label>
          <input
            type="file"
            id="fileUpdate"
            ref="fileUpdate"
            @change="uplodeFileName"
          />
        </div>
      </div>
    </article>
    <!-- 응원도구 전원버튼 이미지 -->
    <article class="form__box flex items-center">
      <label class="form__label">응원도구 전원버튼 이미지</label>
      <!-- 업로드 된 파일 -->
      <div class="flex-1 flex">
        <div class="flex items-bottom mr-4">
          <img
            class="form__file--img mr-2"
            :src="form.imgInfo.powerBtnImg.imgSrc"
            alt=""
          />
          <div v-if="form.imgInfo.powerBtnImg" class="self-end">
            <p class="form__infotext">
              파일 사이즈 : {{ form.imgInfo.powerBtnImg.width }} x
              {{ form.imgInfo.powerBtnImg.height }}
            </p>
            <p class="form__infotext">
              {{ form.imgInfo.powerBtnImg.imgName }}
              <button
                v-if="mode !== 'read'"
                type="button"
                class="form__file--delete"
              >
                <span class="hide">삭제</span>
              </button>
            </p>
          </div>
        </div>
        <div v-if="mode !== 'read'" class="form__file--btn self-end">
          <label for="fileUpdate">찾기</label>
          <input
            type="file"
            id="fileUpdate"
            ref="fileUpdate"
            @change="uplodeFileName"
          />
        </div>
      </div>
    </article>
    <!-- 응원도구 탐색 이미지 -->
    <article class="form__box flex items-center">
      <label class="form__label">응원도구 탐색 이미지</label>
      <!-- 업로드 된 파일 -->
      <div class="flex-1 flex">
        <div class="flex items-bottom mr-4">
          <img
            class="form__file--img mr-2"
            :src="form.imgInfo.navImg.imgSrc"
            alt=""
          />
          <div v-if="form.imgInfo.navImg" class="self-end">
            <p class="form__infotext">
              파일 사이즈 : {{ form.imgInfo.navImg.width }} x
              {{ form.imgInfo.navImg.height }}
            </p>
            <p class="form__infotext">
              {{ form.imgInfo.navImg.imgName }}
              <button
                v-if="mode !== 'read'"
                type="button"
                class="form__file--delete"
              >
                <span class="hide">삭제</span>
              </button>
            </p>
          </div>
        </div>
        <div v-if="mode !== 'read'" class="form__file--btn self-end">
          <label for="fileUpdate">찾기</label>
          <input
            type="file"
            id="fileUpdate"
            ref="fileUpdate"
            @change="uplodeFileName"
          />
        </div>
      </div>
    </article>
    <!-- 응원도구 좌석매핑 이미지 -->
    <article class="form__box flex items-center">
      <label class="form__label">응원도구 좌석매핑 이미지</label>
      <div class="flex-1">
        <div class="text-right">
          <button type="button" class="btn__primary-line mr-2">추가</button>
          <button type="button" class="btn__secondary-line">전체 삭제</button>
        </div>
        <!-- 업로드 된 파일 -->
        <div
          v-for="(mapping, idx) in form.imgInfo.mappingImgs"
          :key="`cheering-tool-file-${idx}`"
          class="flex-1 flex"
        >
          <div class="flex items-bottom mr-4">
            <div class="self-center mr-4">{{ mapping.id }}</div>
            <img class="form__file--img mr-2" :src="mapping.imgSrc" alt="" />
            <div v-if="mapping" class="self-end">
              <p class="form__infotext">
                파일 사이즈 : {{ mapping.width }} x
                {{ mapping.height }}
              </p>
              <p class="form__infotext">
                {{ mapping.imgName }}
                <button
                  v-if="mode !== 'read'"
                  type="button"
                  class="form__file--delete"
                >
                  <span class="hide">삭제</span>
                </button>
              </p>
            </div>
          </div>
          <div v-if="mode !== 'read'" class="form__file--btn self-end">
            <label for="fileUpdate">찾기</label>
            <input
              type="file"
              id="fileUpdate"
              ref="fileUpdate"
              @change="uplodeFileName"
            />
          </div>
        </div>
      </div>
    </article>
    <!-- 응원도구 좌석매핑 정산완료 후 이미지 -->
    <article class="form__box flex items-center">
      <label class="form__label form__label--notHeight"
        >응원도구 좌석매핑<br />정산완료 후 이미지</label
      >
      <!-- 업로드 된 파일 -->
      <div class="flex-1 flex">
        <div class="flex items-bottom mr-4">
          <img
            class="form__file--img mr-2"
            :src="form.imgInfo.calculateImg.imgSrc"
            alt=""
          />
          <div v-if="form.imgInfo.calculateImg" class="self-end">
            <p class="form__infotext">
              파일 사이즈 : {{ form.imgInfo.calculateImg.width }} x
              {{ form.imgInfo.calculateImg.height }}
            </p>
            <p class="form__infotext">
              {{ form.imgInfo.calculateImg.imgName }}
              <button
                v-if="mode !== 'read'"
                type="button"
                class="form__file--delete"
              >
                <span class="hide">삭제</span>
              </button>
            </p>
          </div>
        </div>
        <div v-if="mode !== 'read'" class="form__file--btn self-end">
          <label for="fileUpdate">찾기</label>
          <input
            type="file"
            id="fileUpdate"
            ref="fileUpdate"
            @change="uplodeFileName"
          />
        </div>
      </div>
    </article>
    <!-- 응원도구 연결삭제 이미지 -->
    <article class="form__box flex items-center">
      <label class="form__label">응원도구 연결삭제 이미지</label>
      <!-- 업로드 된 파일 -->
      <div class="flex-1 flex">
        <div class="flex items-bottom mr-4">
          <img
            class="form__file--img mr-2"
            :src="form.imgInfo.dltCnctnImg.imgSrc"
            alt=""
          />
          <div v-if="form.imgInfo.dltCnctnImg" class="self-end">
            <p class="form__infotext">
              파일 사이즈 : {{ form.imgInfo.dltCnctnImg.width }} x
              {{ form.imgInfo.dltCnctnImg.height }}
            </p>
            <p class="form__infotext">
              {{ form.imgInfo.dltCnctnImg.imgName }}
              <button
                v-if="mode !== 'read'"
                type="button"
                class="form__file--delete"
              >
                <span class="hide">삭제</span>
              </button>
            </p>
          </div>
        </div>
        <div v-if="mode !== 'read'" class="form__file--btn self-end">
          <label for="fileUpdate">찾기</label>
          <input
            type="file"
            id="fileUpdate"
            ref="fileUpdate"
            @change="uplodeFileName"
          />
        </div>
      </div>
    </article>
    <!-- 펌웨어 애니메이션 이미지 -->
    <article class="form__box flex items-center">
      <label class="form__label">펌웨어 애니메이션 이미지</label>
      <div class="flex-1">
        <div class="text-right">
          <button type="button" class="btn__primary-line mr-2">추가</button>
          <button type="button" class="btn__secondary-line">전체 삭제</button>
        </div>
        <!-- 업로드 된 파일 -->
        <div
          v-for="(frmwrAnmtn, idx) in form.imgInfo.frmwrAnmtnImgs"
          :key="`cheering-tool-file-${idx}`"
          class="flex-1 flex"
        >
          <div class="flex items-bottom mr-4">
            <div class="self-center mr-4">{{ frmwrAnmtn.id }}</div>
            <img class="form__file--img mr-2" :src="frmwrAnmtn.imgSrc" alt="" />
            <div v-if="frmwrAnmtn" class="self-end">
              <p class="form__infotext">
                파일 사이즈 : {{ frmwrAnmtn.width }} x
                {{ frmwrAnmtn.height }}
              </p>
              <p class="form__infotext">
                {{ frmwrAnmtn.imgName }}
                <button
                  v-if="mode !== 'read'"
                  type="button"
                  class="form__file--delete"
                >
                  <span class="hide">삭제</span>
                </button>
              </p>
            </div>
          </div>
          <div v-if="mode !== 'read'" class="form__file--btn self-end">
            <label for="fileUpdate">찾기</label>
            <input
              type="file"
              id="fileUpdate"
              ref="fileUpdate"
              @change="uplodeFileName"
            />
          </div>
        </div>
      </div>
    </article>
    <!-- 버튼영역 -->
    <article class="flex justify-between mt-4">
      <button
        v-if="mode === 'modify'"
        class="btn__secondary-line--lg"
        @click="deleteDetail"
      >
        삭제
      </button>
      <div class="w-full text-right">
        <button
          v-if="mode !== 'create'"
          class="btn__primary-line--lg mr-1"
          @click="moveList"
        >
          목록
        </button>
        <button
          v-if="mode === 'create'"
          class="btn__primary-line--lg mr-1"
          @click="moveCancel"
        >
          취소
        </button>
        <button
          v-if="mode === 'read'"
          class="btn__primary--lg"
          @click="changeModifyMode"
        >
          수정
        </button>
        <button
          v-if="mode !== 'read'"
          class="btn__primary--lg"
          @click="saveDetail"
        >
          저장
        </button>
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
        imgInfo: {
          mainThumbnail: {
            imgSrc: require('@/assets/img/img__sample.jpg'),
            width: '450',
            height: '1000',
            imgName: '이미지 파일명',
          },
          powerBtnImg: {
            imgSrc: require('@/assets/img/img__sample.jpg'),
            width: '450',
            height: '1000',
            imgName: '이미지 파일명',
          },
          navImg: {
            imgSrc: require('@/assets/img/img__sample.jpg'),
            width: '450',
            height: '1000',
            imgName: '이미지 파일명',
          },
          mappingImgs: [
            {
              id: '01',
              imgSrc: require('@/assets/img/img__sample.jpg'),
              width: '450',
              height: '1000',
              imgName: '이미지 파일명',
            },
          ],
          calculateImg: {
            imgSrc: require('@/assets/img/img__sample.jpg'),
            width: '450',
            height: '1000',
            imgName: '이미지 파일명',
          },
          dltCnctnImg: {
            imgSrc: require('@/assets/img/img__sample.jpg'),
            width: '450',
            height: '1000',
            imgName: '이미지 파일명',
          },
          frmwrAnmtnImgs: [
            {
              id: '01',
              imgSrc: require('@/assets/img/img__sample.jpg'),
              width: '450',
              height: '1000',
              imgName: '이미지 파일명',
            },
          ],
        },
      },
    }
  },
  methods: {
    deleteDetail() {
      // 삭제
    },
    moveList() {
      this.$router.push({ name: 'CheeringTtoolMgmt' })
      // 목록
    },
    moveCancel() {
      // 취소
      this.$router.push({ name: 'CheeringTtoolMgmt' })
    },
    changeModifyMode() {
      // 수정
      this.isModify = true
    },
    saveDetail() {
      // 저장
    },
    // 첨부파일
    uplodeFileName() {
      let file = this.$refs.fileUpdate.files[0]
      this.form.imgInfo.mainThumbnail.push(file)
      this.form.imgInfo.powerBtnImg.push(file)
      this.form.imgInfo.navigationImg.push(file)
      this.form.imgInfo.mappingImgs.push(file)
      this.form.imgInfo.calculateImg.push(file)
      this.form.imgInfo.dltCnctnImg.push(file)
      this.form.imgInfo.frmwrAnmtnImgs.push(file)
    },
  },
}
</script>

<style lang="scss" scoped>
.CheeringTool {
  .form__box {
    padding: 10px;
    border-top: 1px solid $gray-20;
    + .form__box {
      border-top: none;
    }
  }
}
</style>
