const { Among, BaseStemmer } = require('@bokata/core');

/* eslint-disable */
class StemmerTr extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-tr';
    this.B_continue_stemming_noun_suffixes = false;
    this.I_strlen = 0;
  }

  copy_from(other) {
    this.B_continue_stemming_noun_suffixes =
      other.B_continue_stemming_noun_suffixes;
    this.I_strlen = other.I_strlen;
    super.copy_from(other);
  }

  r_check_vowel_harmony() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    // (, line 111
    // test, line 112
    v_1 = this.limit - this.cursor;
    // (, line 113
    // (, line 114
    // goto, line 114
    golab0: while (true) {
      v_2 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break;
        }
        this.cursor = this.limit - v_2;
        break golab0;
      }
      this.cursor = this.limit - v_2;
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
    }
    // (, line 115
    // or, line 116
    let lab2 = true;
    lab2: while (lab2 == true) {
      lab2 = false;
      v_3 = this.limit - this.cursor;
      let lab3 = true;
      lab3: while (lab3 == true) {
        lab3 = false;
        // (, line 116
        // literal, line 116
        if (!this.eq_s_b(1, 'a')) {
          break;
        }
        // goto, line 116
        golab4: while (true) {
          v_4 = this.limit - this.cursor;
          let lab5 = true;
          while (lab5 == true) {
            lab5 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel1, 97, 305)) {
              break;
            }
            this.cursor = this.limit - v_4;
            break golab4;
          }
          this.cursor = this.limit - v_4;
          if (this.cursor <= this.limit_backward) {
            break lab3;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab6 = true;
      lab6: while (lab6 == true) {
        lab6 = false;
        // (, line 117
        // literal, line 117
        if (!this.eq_s_b(1, 'e')) {
          break;
        }
        // goto, line 117
        golab7: while (true) {
          v_5 = this.limit - this.cursor;
          let lab8 = true;
          while (lab8 == true) {
            lab8 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel2, 101, 252)) {
              break;
            }
            this.cursor = this.limit - v_5;
            break golab7;
          }
          this.cursor = this.limit - v_5;
          if (this.cursor <= this.limit_backward) {
            break lab6;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab9 = true;
      lab9: while (lab9 == true) {
        lab9 = false;
        // (, line 118
        // literal, line 118
        if (!this.eq_s_b(1, '\u0131')) {
          break;
        }
        // goto, line 118
        golab10: while (true) {
          v_6 = this.limit - this.cursor;
          let lab11 = true;
          while (lab11 == true) {
            lab11 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel3, 97, 305)) {
              break;
            }
            this.cursor = this.limit - v_6;
            break golab10;
          }
          this.cursor = this.limit - v_6;
          if (this.cursor <= this.limit_backward) {
            break lab9;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab12 = true;
      lab12: while (lab12 == true) {
        lab12 = false;
        // (, line 119
        // literal, line 119
        if (!this.eq_s_b(1, 'i')) {
          break;
        }
        // goto, line 119
        golab13: while (true) {
          v_7 = this.limit - this.cursor;
          let lab14 = true;
          while (lab14 == true) {
            lab14 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel4, 101, 105)) {
              break;
            }
            this.cursor = this.limit - v_7;
            break golab13;
          }
          this.cursor = this.limit - v_7;
          if (this.cursor <= this.limit_backward) {
            break lab12;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab15 = true;
      lab15: while (lab15 == true) {
        lab15 = false;
        // (, line 120
        // literal, line 120
        if (!this.eq_s_b(1, 'o')) {
          break;
        }
        // goto, line 120
        golab16: while (true) {
          v_8 = this.limit - this.cursor;
          let lab17 = true;
          while (lab17 == true) {
            lab17 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel5, 111, 117)) {
              break;
            }
            this.cursor = this.limit - v_8;
            break golab16;
          }
          this.cursor = this.limit - v_8;
          if (this.cursor <= this.limit_backward) {
            break lab15;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab18 = true;
      lab18: while (lab18 == true) {
        lab18 = false;
        // (, line 121
        // literal, line 121
        if (!this.eq_s_b(1, '\u00F6')) {
          break;
        }
        // goto, line 121
        golab19: while (true) {
          v_9 = this.limit - this.cursor;
          let lab20 = true;
          while (lab20 == true) {
            lab20 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel6, 246, 252)) {
              break;
            }
            this.cursor = this.limit - v_9;
            break golab19;
          }
          this.cursor = this.limit - v_9;
          if (this.cursor <= this.limit_backward) {
            break lab18;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab21 = true;
      lab21: while (lab21 == true) {
        lab21 = false;
        // (, line 122
        // literal, line 122
        if (!this.eq_s_b(1, 'u')) {
          break;
        }
        // goto, line 122
        golab22: while (true) {
          v_10 = this.limit - this.cursor;
          let lab23 = true;
          while (lab23 == true) {
            lab23 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel5, 111, 117)) {
              break;
            }
            this.cursor = this.limit - v_10;
            break golab22;
          }
          this.cursor = this.limit - v_10;
          if (this.cursor <= this.limit_backward) {
            break lab21;
          }
          this.cursor--;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      // (, line 123
      // literal, line 123
      if (!this.eq_s_b(1, '\u00FC')) {
        return false;
      }
      // goto, line 123
      golab24: while (true) {
        v_11 = this.limit - this.cursor;
        let lab25 = true;
        while (lab25 == true) {
          lab25 = false;
          if (!this.in_grouping_b(StemmerTr.g_vowel6, 246, 252)) {
            break;
          }
          this.cursor = this.limit - v_11;
          break golab24;
        }
        this.cursor = this.limit - v_11;
        if (this.cursor <= this.limit_backward) {
          return false;
        }
        this.cursor--;
      }
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  r_mark_suffix_with_optional_n_consonant() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 132
    // or, line 134
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        // (, line 133
        // (, line 133
        // test, line 133
        v_2 = this.limit - this.cursor;
        // literal, line 133
        if (!this.eq_s_b(1, 'n')) {
          break;
        }
        this.cursor = this.limit - v_2;
        // next, line 133
        if (this.cursor <= this.limit_backward) {
          break;
        }
        this.cursor--;
        // (, line 133
        // test, line 133
        v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 135
      // (, line 135
      // not, line 135
      {
        v_4 = this.limit - this.cursor;
        let lab2 = true;
        while (lab2 == true) {
          lab2 = false;
          // (, line 135
          // test, line 135
          v_5 = this.limit - this.cursor;
          // literal, line 135
          if (!this.eq_s_b(1, 'n')) {
            break;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 135
      v_6 = this.limit - this.cursor;
      // (, line 135
      // next, line 135
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 135
      // test, line 135
      v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_s_consonant() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 143
    // or, line 145
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        // (, line 144
        // (, line 144
        // test, line 144
        v_2 = this.limit - this.cursor;
        // literal, line 144
        if (!this.eq_s_b(1, 's')) {
          break;
        }
        this.cursor = this.limit - v_2;
        // next, line 144
        if (this.cursor <= this.limit_backward) {
          break;
        }
        this.cursor--;
        // (, line 144
        // test, line 144
        v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 146
      // (, line 146
      // not, line 146
      {
        v_4 = this.limit - this.cursor;
        let lab2 = true;
        while (lab2 == true) {
          lab2 = false;
          // (, line 146
          // test, line 146
          v_5 = this.limit - this.cursor;
          // literal, line 146
          if (!this.eq_s_b(1, 's')) {
            break;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 146
      v_6 = this.limit - this.cursor;
      // (, line 146
      // next, line 146
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 146
      // test, line 146
      v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_y_consonant() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 153
    // or, line 155
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        // (, line 154
        // (, line 154
        // test, line 154
        v_2 = this.limit - this.cursor;
        // literal, line 154
        if (!this.eq_s_b(1, 'y')) {
          break;
        }
        this.cursor = this.limit - v_2;
        // next, line 154
        if (this.cursor <= this.limit_backward) {
          break;
        }
        this.cursor--;
        // (, line 154
        // test, line 154
        v_3 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 156
      // (, line 156
      // not, line 156
      {
        v_4 = this.limit - this.cursor;
        let lab2 = true;
        while (lab2 == true) {
          lab2 = false;
          // (, line 156
          // test, line 156
          v_5 = this.limit - this.cursor;
          // literal, line 156
          if (!this.eq_s_b(1, 'y')) {
            break;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 156
      v_6 = this.limit - this.cursor;
      // (, line 156
      // next, line 156
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 156
      // test, line 156
      v_7 = this.limit - this.cursor;
      if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_suffix_with_optional_U_vowel() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    // (, line 159
    // or, line 161
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        // (, line 160
        // (, line 160
        // test, line 160
        v_2 = this.limit - this.cursor;
        if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
          break;
        }
        this.cursor = this.limit - v_2;
        // next, line 160
        if (this.cursor <= this.limit_backward) {
          break;
        }
        this.cursor--;
        // (, line 160
        // test, line 160
        v_3 = this.limit - this.cursor;
        if (!this.out_grouping_b(StemmerTr.g_vowel, 97, 305)) {
          break;
        }
        this.cursor = this.limit - v_3;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 162
      // (, line 162
      // not, line 162
      {
        v_4 = this.limit - this.cursor;
        let lab2 = true;
        while (lab2 == true) {
          lab2 = false;
          // (, line 162
          // test, line 162
          v_5 = this.limit - this.cursor;
          if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
            break;
          }
          this.cursor = this.limit - v_5;
          return false;
        }
        this.cursor = this.limit - v_4;
      }
      // test, line 162
      v_6 = this.limit - this.cursor;
      // (, line 162
      // next, line 162
      if (this.cursor <= this.limit_backward) {
        return false;
      }
      this.cursor--;
      // (, line 162
      // test, line 162
      v_7 = this.limit - this.cursor;
      if (!this.out_grouping_b(StemmerTr.g_vowel, 97, 305)) {
        return false;
      }
      this.cursor = this.limit - v_7;
      this.cursor = this.limit - v_6;
    }
    return true;
  }

  r_mark_possessives() {
    // (, line 166
    // among, line 167
    if (this.find_among_b(StemmerTr.a_0, 10) == 0) {
      return false;
    }
    // (, line 169
    // call mark_suffix_with_optional_U_vowel, line 169
    if (!this.r_mark_suffix_with_optional_U_vowel()) {
      return false;
    }
    return true;
  }

  r_mark_sU() {
    // (, line 172
    // call check_vowel_harmony, line 173
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
      return false;
    }
    // (, line 175
    // call mark_suffix_with_optional_s_consonant, line 175
    if (!this.r_mark_suffix_with_optional_s_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_lArI() {
    // (, line 178
    // among, line 179
    if (this.find_among_b(StemmerTr.a_1, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_yU() {
    // (, line 182
    // call check_vowel_harmony, line 183
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    if (!this.in_grouping_b(StemmerTr.g_U, 105, 305)) {
      return false;
    }
    // (, line 185
    // call mark_suffix_with_optional_y_consonant, line 185
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_nU() {
    // (, line 188
    // call check_vowel_harmony, line 189
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 190
    if (this.find_among_b(StemmerTr.a_2, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_nUn() {
    // (, line 193
    // call check_vowel_harmony, line 194
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 195
    if (this.find_among_b(StemmerTr.a_3, 4) == 0) {
      return false;
    }
    // (, line 196
    // call mark_suffix_with_optional_n_consonant, line 196
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yA() {
    // (, line 199
    // call check_vowel_harmony, line 200
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 201
    if (this.find_among_b(StemmerTr.a_4, 2) == 0) {
      return false;
    }
    // (, line 202
    // call mark_suffix_with_optional_y_consonant, line 202
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_nA() {
    // (, line 205
    // call check_vowel_harmony, line 206
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 207
    if (this.find_among_b(StemmerTr.a_5, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_DA() {
    // (, line 210
    // call check_vowel_harmony, line 211
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 212
    if (this.find_among_b(StemmerTr.a_6, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_ndA() {
    // (, line 215
    // call check_vowel_harmony, line 216
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 217
    if (this.find_among_b(StemmerTr.a_7, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_DAn() {
    // (, line 220
    // call check_vowel_harmony, line 221
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 222
    if (this.find_among_b(StemmerTr.a_8, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_ndAn() {
    // (, line 225
    // call check_vowel_harmony, line 226
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 227
    if (this.find_among_b(StemmerTr.a_9, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_ylA() {
    // (, line 230
    // call check_vowel_harmony, line 231
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 232
    if (this.find_among_b(StemmerTr.a_10, 2) == 0) {
      return false;
    }
    // (, line 233
    // call mark_suffix_with_optional_y_consonant, line 233
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ki() {
    // (, line 236
    // literal, line 237
    if (!this.eq_s_b(2, 'ki')) {
      return false;
    }
    return true;
  }

  r_mark_ncA() {
    // (, line 240
    // call check_vowel_harmony, line 241
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 242
    if (this.find_among_b(StemmerTr.a_11, 2) == 0) {
      return false;
    }
    // (, line 243
    // call mark_suffix_with_optional_n_consonant, line 243
    if (!this.r_mark_suffix_with_optional_n_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yUm() {
    // (, line 246
    // call check_vowel_harmony, line 247
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 248
    if (this.find_among_b(StemmerTr.a_12, 4) == 0) {
      return false;
    }
    // (, line 249
    // call mark_suffix_with_optional_y_consonant, line 249
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_sUn() {
    // (, line 252
    // call check_vowel_harmony, line 253
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 254
    if (this.find_among_b(StemmerTr.a_13, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_yUz() {
    // (, line 257
    // call check_vowel_harmony, line 258
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 259
    if (this.find_among_b(StemmerTr.a_14, 4) == 0) {
      return false;
    }
    // (, line 260
    // call mark_suffix_with_optional_y_consonant, line 260
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_sUnUz() {
    // (, line 263
    // among, line 264
    if (this.find_among_b(StemmerTr.a_15, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_lAr() {
    // (, line 267
    // call check_vowel_harmony, line 268
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 269
    if (this.find_among_b(StemmerTr.a_16, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_nUz() {
    // (, line 272
    // call check_vowel_harmony, line 273
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 274
    if (this.find_among_b(StemmerTr.a_17, 4) == 0) {
      return false;
    }
    return true;
  }

  r_mark_DUr() {
    // (, line 277
    // call check_vowel_harmony, line 278
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 279
    if (this.find_among_b(StemmerTr.a_18, 8) == 0) {
      return false;
    }
    return true;
  }

  r_mark_cAsInA() {
    // (, line 282
    // among, line 283
    if (this.find_among_b(StemmerTr.a_19, 2) == 0) {
      return false;
    }
    return true;
  }

  r_mark_yDU() {
    // (, line 286
    // call check_vowel_harmony, line 287
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 288
    if (this.find_among_b(StemmerTr.a_20, 32) == 0) {
      return false;
    }
    // (, line 292
    // call mark_suffix_with_optional_y_consonant, line 292
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ysA() {
    // (, line 296
    // among, line 297
    if (this.find_among_b(StemmerTr.a_21, 8) == 0) {
      return false;
    }
    // (, line 298
    // call mark_suffix_with_optional_y_consonant, line 298
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_ymUs_() {
    // (, line 301
    // call check_vowel_harmony, line 302
    if (!this.r_check_vowel_harmony()) {
      return false;
    }
    // among, line 303
    if (this.find_among_b(StemmerTr.a_22, 4) == 0) {
      return false;
    }
    // (, line 304
    // call mark_suffix_with_optional_y_consonant, line 304
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_mark_yken() {
    // (, line 307
    // literal, line 308
    if (!this.eq_s_b(3, 'ken')) {
      return false;
    }
    // (, line 308
    // call mark_suffix_with_optional_y_consonant, line 308
    if (!this.r_mark_suffix_with_optional_y_consonant()) {
      return false;
    }
    return true;
  }

  r_stem_nominal_verb_suffixes() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    // (, line 311
    // [, line 312
    this.ket = this.cursor;
    // set continue_stemming_noun_suffixes, line 313
    this.B_continue_stemming_noun_suffixes = true;
    // or, line 315
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.limit - this.cursor;
      let lab1 = true;
      lab1: while (lab1 == true) {
        lab1 = false;
        // (, line 314
        // or, line 314
        let lab2 = true;
        lab2: while (lab2 == true) {
          lab2 = false;
          v_2 = this.limit - this.cursor;
          let lab3 = true;
          while (lab3 == true) {
            lab3 = false;
            // call mark_ymUs_, line 314
            if (!this.r_mark_ymUs_()) {
              break;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          let lab4 = true;
          while (lab4 == true) {
            lab4 = false;
            // call mark_yDU, line 314
            if (!this.r_mark_yDU()) {
              break;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          let lab5 = true;
          while (lab5 == true) {
            lab5 = false;
            // call mark_ysA, line 314
            if (!this.r_mark_ysA()) {
              break;
            }
            break lab2;
          }
          this.cursor = this.limit - v_2;
          // call mark_yken, line 314
          if (!this.r_mark_yken()) {
            break lab1;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab6 = true;
      while (lab6 == true) {
        lab6 = false;
        // (, line 316
        // call mark_cAsInA, line 316
        if (!this.r_mark_cAsInA()) {
          break;
        }
        // (, line 316
        // or, line 316
        let lab7 = true;
        lab7: while (lab7 == true) {
          lab7 = false;
          v_3 = this.limit - this.cursor;
          let lab8 = true;
          while (lab8 == true) {
            lab8 = false;
            // call mark_sUnUz, line 316
            if (!this.r_mark_sUnUz()) {
              break;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          let lab9 = true;
          while (lab9 == true) {
            lab9 = false;
            // call mark_lAr, line 316
            if (!this.r_mark_lAr()) {
              break;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          let lab10 = true;
          while (lab10 == true) {
            lab10 = false;
            // call mark_yUm, line 316
            if (!this.r_mark_yUm()) {
              break;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          let lab11 = true;
          while (lab11 == true) {
            lab11 = false;
            // call mark_sUn, line 316
            if (!this.r_mark_sUn()) {
              break;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
          let lab12 = true;
          while (lab12 == true) {
            lab12 = false;
            // call mark_yUz, line 316
            if (!this.r_mark_yUz()) {
              break;
            }
            break lab7;
          }
          this.cursor = this.limit - v_3;
        }
        // call mark_ymUs_, line 316
        if (!this.r_mark_ymUs_()) {
          break;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab13 = true;
      while (lab13 == true) {
        lab13 = false;
        // (, line 318
        // call mark_lAr, line 319
        if (!this.r_mark_lAr()) {
          break;
        }
        // ], line 319
        this.bra = this.cursor;
        // delete, line 319
        if (!this.slice_del()) {
          return false;
        }
        // try, line 319
        v_4 = this.limit - this.cursor;
        let lab14 = true;
        lab14: while (lab14 == true) {
          lab14 = false;
          // (, line 319
          // [, line 319
          this.ket = this.cursor;
          // (, line 319
          // or, line 319
          let lab15 = true;
          lab15: while (lab15 == true) {
            lab15 = false;
            v_5 = this.limit - this.cursor;
            let lab16 = true;
            while (lab16 == true) {
              lab16 = false;
              // call mark_DUr, line 319
              if (!this.r_mark_DUr()) {
                break;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            let lab17 = true;
            while (lab17 == true) {
              lab17 = false;
              // call mark_yDU, line 319
              if (!this.r_mark_yDU()) {
                break;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            let lab18 = true;
            while (lab18 == true) {
              lab18 = false;
              // call mark_ysA, line 319
              if (!this.r_mark_ysA()) {
                break;
              }
              break lab15;
            }
            this.cursor = this.limit - v_5;
            // call mark_ymUs_, line 319
            if (!this.r_mark_ymUs_()) {
              this.cursor = this.limit - v_4;
              break lab14;
            }
          }
        }
        // unset continue_stemming_noun_suffixes, line 320
        this.B_continue_stemming_noun_suffixes = false;
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab19 = true;
      lab19: while (lab19 == true) {
        lab19 = false;
        // (, line 323
        // call mark_nUz, line 323
        if (!this.r_mark_nUz()) {
          break;
        }
        // (, line 323
        // or, line 323
        let lab20 = true;
        lab20: while (lab20 == true) {
          lab20 = false;
          v_6 = this.limit - this.cursor;
          let lab21 = true;
          while (lab21 == true) {
            lab21 = false;
            // call mark_yDU, line 323
            if (!this.r_mark_yDU()) {
              break;
            }
            break lab20;
          }
          this.cursor = this.limit - v_6;
          // call mark_ysA, line 323
          if (!this.r_mark_ysA()) {
            break lab19;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab22 = true;
      lab22: while (lab22 == true) {
        lab22 = false;
        // (, line 325
        // (, line 325
        // or, line 325
        let lab23 = true;
        lab23: while (lab23 == true) {
          lab23 = false;
          v_7 = this.limit - this.cursor;
          let lab24 = true;
          while (lab24 == true) {
            lab24 = false;
            // call mark_sUnUz, line 325
            if (!this.r_mark_sUnUz()) {
              break;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          let lab25 = true;
          while (lab25 == true) {
            lab25 = false;
            // call mark_yUz, line 325
            if (!this.r_mark_yUz()) {
              break;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          let lab26 = true;
          while (lab26 == true) {
            lab26 = false;
            // call mark_sUn, line 325
            if (!this.r_mark_sUn()) {
              break;
            }
            break lab23;
          }
          this.cursor = this.limit - v_7;
          // call mark_yUm, line 325
          if (!this.r_mark_yUm()) {
            break lab22;
          }
        }
        // ], line 325
        this.bra = this.cursor;
        // delete, line 325
        if (!this.slice_del()) {
          return false;
        }
        // try, line 325
        v_8 = this.limit - this.cursor;
        let lab27 = true;
        while (lab27 == true) {
          lab27 = false;
          // (, line 325
          // [, line 325
          this.ket = this.cursor;
          // call mark_ymUs_, line 325
          if (!this.r_mark_ymUs_()) {
            this.cursor = this.limit - v_8;
            break;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 327
      // call mark_DUr, line 327
      if (!this.r_mark_DUr()) {
        return false;
      }
      // ], line 327
      this.bra = this.cursor;
      // delete, line 327
      if (!this.slice_del()) {
        return false;
      }
      // try, line 327
      v_9 = this.limit - this.cursor;
      let lab28 = true;
      while (lab28 == true) {
        lab28 = false;
        // (, line 327
        // [, line 327
        this.ket = this.cursor;
        // (, line 327
        // or, line 327
        let lab29 = true;
        lab29: while (lab29 == true) {
          lab29 = false;
          v_10 = this.limit - this.cursor;
          let lab30 = true;
          while (lab30 == true) {
            lab30 = false;
            // call mark_sUnUz, line 327
            if (!this.r_mark_sUnUz()) {
              break;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          let lab31 = true;
          while (lab31 == true) {
            lab31 = false;
            // call mark_lAr, line 327
            if (!this.r_mark_lAr()) {
              break;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          let lab32 = true;
          while (lab32 == true) {
            lab32 = false;
            // call mark_yUm, line 327
            if (!this.r_mark_yUm()) {
              break;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          let lab33 = true;
          while (lab33 == true) {
            lab33 = false;
            // call mark_sUn, line 327
            if (!this.r_mark_sUn()) {
              break;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
          let lab34 = true;
          while (lab34 == true) {
            lab34 = false;
            // call mark_yUz, line 327
            if (!this.r_mark_yUz()) {
              break;
            }
            break lab29;
          }
          this.cursor = this.limit - v_10;
        }
        // call mark_ymUs_, line 327
        if (!this.r_mark_ymUs_()) {
          this.cursor = this.limit - v_9;
          break;
        }
      }
    }
    // ], line 328
    this.bra = this.cursor;
    // delete, line 328
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_stem_suffix_chain_before_ki() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    // (, line 332
    // [, line 333
    this.ket = this.cursor;
    // call mark_ki, line 334
    if (!this.r_mark_ki()) {
      return false;
    }
    // (, line 335
    // or, line 342
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        // (, line 336
        // call mark_DA, line 336
        if (!this.r_mark_DA()) {
          break;
        }
        // ], line 336
        this.bra = this.cursor;
        // delete, line 336
        if (!this.slice_del()) {
          return false;
        }
        // try, line 336
        v_2 = this.limit - this.cursor;
        let lab2 = true;
        lab2: while (lab2 == true) {
          lab2 = false;
          // (, line 336
          // [, line 336
          this.ket = this.cursor;
          // or, line 338
          let lab3 = true;
          lab3: while (lab3 == true) {
            lab3 = false;
            v_3 = this.limit - this.cursor;
            let lab4 = true;
            while (lab4 == true) {
              lab4 = false;
              // (, line 337
              // call mark_lAr, line 337
              if (!this.r_mark_lAr()) {
                break;
              }
              // ], line 337
              this.bra = this.cursor;
              // delete, line 337
              if (!this.slice_del()) {
                return false;
              }
              // try, line 337
              v_4 = this.limit - this.cursor;
              let lab5 = true;
              while (lab5 == true) {
                lab5 = false;
                // (, line 337
                // call stem_suffix_chain_before_ki, line 337
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_4;
                  break;
                }
              }
              break lab3;
            }
            this.cursor = this.limit - v_3;
            // (, line 339
            // call mark_possessives, line 339
            if (!this.r_mark_possessives()) {
              this.cursor = this.limit - v_2;
              break lab2;
            }
            // ], line 339
            this.bra = this.cursor;
            // delete, line 339
            if (!this.slice_del()) {
              return false;
            }
            // try, line 339
            v_5 = this.limit - this.cursor;
            let lab6 = true;
            while (lab6 == true) {
              lab6 = false;
              // (, line 339
              // [, line 339
              this.ket = this.cursor;
              // call mark_lAr, line 339
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_5;
                break;
              }
              // ], line 339
              this.bra = this.cursor;
              // delete, line 339
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 339
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_5;
                break;
              }
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab7 = true;
      while (lab7 == true) {
        lab7 = false;
        // (, line 343
        // call mark_nUn, line 343
        if (!this.r_mark_nUn()) {
          break;
        }
        // ], line 343
        this.bra = this.cursor;
        // delete, line 343
        if (!this.slice_del()) {
          return false;
        }
        // try, line 343
        v_6 = this.limit - this.cursor;
        let lab8 = true;
        lab8: while (lab8 == true) {
          lab8 = false;
          // (, line 343
          // [, line 343
          this.ket = this.cursor;
          // or, line 345
          let lab9 = true;
          lab9: while (lab9 == true) {
            lab9 = false;
            v_7 = this.limit - this.cursor;
            let lab10 = true;
            while (lab10 == true) {
              lab10 = false;
              // (, line 344
              // call mark_lArI, line 344
              if (!this.r_mark_lArI()) {
                break;
              }
              // ], line 344
              this.bra = this.cursor;
              // delete, line 344
              if (!this.slice_del()) {
                return false;
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            let lab11 = true;
            lab11: while (lab11 == true) {
              lab11 = false;
              // (, line 346
              // [, line 346
              this.ket = this.cursor;
              // or, line 346
              let lab12 = true;
              lab12: while (lab12 == true) {
                lab12 = false;
                v_8 = this.limit - this.cursor;
                let lab13 = true;
                while (lab13 == true) {
                  lab13 = false;
                  // call mark_possessives, line 346
                  if (!this.r_mark_possessives()) {
                    break;
                  }
                  break lab12;
                }
                this.cursor = this.limit - v_8;
                // call mark_sU, line 346
                if (!this.r_mark_sU()) {
                  break lab11;
                }
              }
              // ], line 346
              this.bra = this.cursor;
              // delete, line 346
              if (!this.slice_del()) {
                return false;
              }
              // try, line 346
              v_9 = this.limit - this.cursor;
              let lab14 = true;
              while (lab14 == true) {
                lab14 = false;
                // (, line 346
                // [, line 346
                this.ket = this.cursor;
                // call mark_lAr, line 346
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_9;
                  break;
                }
                // ], line 346
                this.bra = this.cursor;
                // delete, line 346
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 346
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_9;
                  break;
                }
              }
              break lab9;
            }
            this.cursor = this.limit - v_7;
            // (, line 348
            // call stem_suffix_chain_before_ki, line 348
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_6;
              break lab8;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 351
      // call mark_ndA, line 351
      if (!this.r_mark_ndA()) {
        return false;
      }
      // (, line 351
      // or, line 353
      let lab15 = true;
      lab15: while (lab15 == true) {
        lab15 = false;
        v_10 = this.limit - this.cursor;
        let lab16 = true;
        while (lab16 == true) {
          lab16 = false;
          // (, line 352
          // call mark_lArI, line 352
          if (!this.r_mark_lArI()) {
            break;
          }
          // ], line 352
          this.bra = this.cursor;
          // delete, line 352
          if (!this.slice_del()) {
            return false;
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        let lab17 = true;
        while (lab17 == true) {
          lab17 = false;
          // (, line 354
          // (, line 354
          // call mark_sU, line 354
          if (!this.r_mark_sU()) {
            break;
          }
          // ], line 354
          this.bra = this.cursor;
          // delete, line 354
          if (!this.slice_del()) {
            return false;
          }
          // try, line 354
          v_11 = this.limit - this.cursor;
          let lab18 = true;
          while (lab18 == true) {
            lab18 = false;
            // (, line 354
            // [, line 354
            this.ket = this.cursor;
            // call mark_lAr, line 354
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_11;
              break;
            }
            // ], line 354
            this.bra = this.cursor;
            // delete, line 354
            if (!this.slice_del()) {
              return false;
            }
            // call stem_suffix_chain_before_ki, line 354
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_11;
              break;
            }
          }
          break lab15;
        }
        this.cursor = this.limit - v_10;
        // (, line 356
        // call stem_suffix_chain_before_ki, line 356
        if (!this.r_stem_suffix_chain_before_ki()) {
          return false;
        }
      }
    }
    return true;
  }

  r_stem_noun_suffixes() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    let v_12;
    let v_13;
    let v_14;
    let v_15;
    let v_16;
    let v_17;
    let v_18;
    let v_19;
    let v_20;
    let v_21;
    let v_22;
    let v_23;
    let v_24;
    let v_25;
    let v_26;
    let v_27;
    // (, line 361
    // or, line 363
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        // (, line 362
        // [, line 362
        this.ket = this.cursor;
        // call mark_lAr, line 362
        if (!this.r_mark_lAr()) {
          break;
        }
        // ], line 362
        this.bra = this.cursor;
        // delete, line 362
        if (!this.slice_del()) {
          return false;
        }
        // try, line 362
        v_2 = this.limit - this.cursor;
        let lab2 = true;
        while (lab2 == true) {
          lab2 = false;
          // (, line 362
          // call stem_suffix_chain_before_ki, line 362
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_2;
            break;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab3 = true;
      while (lab3 == true) {
        lab3 = false;
        // (, line 364
        // [, line 364
        this.ket = this.cursor;
        // call mark_ncA, line 364
        if (!this.r_mark_ncA()) {
          break;
        }
        // ], line 364
        this.bra = this.cursor;
        // delete, line 364
        if (!this.slice_del()) {
          return false;
        }
        // try, line 365
        v_3 = this.limit - this.cursor;
        let lab4 = true;
        lab4: while (lab4 == true) {
          lab4 = false;
          // (, line 365
          // or, line 367
          let lab5 = true;
          lab5: while (lab5 == true) {
            lab5 = false;
            v_4 = this.limit - this.cursor;
            let lab6 = true;
            while (lab6 == true) {
              lab6 = false;
              // (, line 366
              // [, line 366
              this.ket = this.cursor;
              // call mark_lArI, line 366
              if (!this.r_mark_lArI()) {
                break;
              }
              // ], line 366
              this.bra = this.cursor;
              // delete, line 366
              if (!this.slice_del()) {
                return false;
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            let lab7 = true;
            lab7: while (lab7 == true) {
              lab7 = false;
              // (, line 368
              // [, line 368
              this.ket = this.cursor;
              // or, line 368
              let lab8 = true;
              lab8: while (lab8 == true) {
                lab8 = false;
                v_5 = this.limit - this.cursor;
                let lab9 = true;
                while (lab9 == true) {
                  lab9 = false;
                  // call mark_possessives, line 368
                  if (!this.r_mark_possessives()) {
                    break;
                  }
                  break lab8;
                }
                this.cursor = this.limit - v_5;
                // call mark_sU, line 368
                if (!this.r_mark_sU()) {
                  break lab7;
                }
              }
              // ], line 368
              this.bra = this.cursor;
              // delete, line 368
              if (!this.slice_del()) {
                return false;
              }
              // try, line 368
              v_6 = this.limit - this.cursor;
              let lab10 = true;
              while (lab10 == true) {
                lab10 = false;
                // (, line 368
                // [, line 368
                this.ket = this.cursor;
                // call mark_lAr, line 368
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_6;
                  break;
                }
                // ], line 368
                this.bra = this.cursor;
                // delete, line 368
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 368
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_6;
                  break;
                }
              }
              break lab5;
            }
            this.cursor = this.limit - v_4;
            // (, line 370
            // [, line 370
            this.ket = this.cursor;
            // call mark_lAr, line 370
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_3;
              break lab4;
            }
            // ], line 370
            this.bra = this.cursor;
            // delete, line 370
            if (!this.slice_del()) {
              return false;
            }
            // call stem_suffix_chain_before_ki, line 370
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_3;
              break lab4;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab11 = true;
      lab11: while (lab11 == true) {
        lab11 = false;
        // (, line 374
        // [, line 374
        this.ket = this.cursor;
        // (, line 374
        // or, line 374
        let lab12 = true;
        lab12: while (lab12 == true) {
          lab12 = false;
          v_7 = this.limit - this.cursor;
          let lab13 = true;
          while (lab13 == true) {
            lab13 = false;
            // call mark_ndA, line 374
            if (!this.r_mark_ndA()) {
              break;
            }
            break lab12;
          }
          this.cursor = this.limit - v_7;
          // call mark_nA, line 374
          if (!this.r_mark_nA()) {
            break lab11;
          }
        }
        // (, line 375
        // or, line 377
        let lab14 = true;
        lab14: while (lab14 == true) {
          lab14 = false;
          v_8 = this.limit - this.cursor;
          let lab15 = true;
          while (lab15 == true) {
            lab15 = false;
            // (, line 376
            // call mark_lArI, line 376
            if (!this.r_mark_lArI()) {
              break;
            }
            // ], line 376
            this.bra = this.cursor;
            // delete, line 376
            if (!this.slice_del()) {
              return false;
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          let lab16 = true;
          while (lab16 == true) {
            lab16 = false;
            // (, line 378
            // call mark_sU, line 378
            if (!this.r_mark_sU()) {
              break;
            }
            // ], line 378
            this.bra = this.cursor;
            // delete, line 378
            if (!this.slice_del()) {
              return false;
            }
            // try, line 378
            v_9 = this.limit - this.cursor;
            let lab17 = true;
            while (lab17 == true) {
              lab17 = false;
              // (, line 378
              // [, line 378
              this.ket = this.cursor;
              // call mark_lAr, line 378
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_9;
                break;
              }
              // ], line 378
              this.bra = this.cursor;
              // delete, line 378
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 378
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_9;
                break;
              }
            }
            break lab14;
          }
          this.cursor = this.limit - v_8;
          // (, line 380
          // call stem_suffix_chain_before_ki, line 380
          if (!this.r_stem_suffix_chain_before_ki()) {
            break lab11;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab18 = true;
      lab18: while (lab18 == true) {
        lab18 = false;
        // (, line 384
        // [, line 384
        this.ket = this.cursor;
        // (, line 384
        // or, line 384
        let lab19 = true;
        lab19: while (lab19 == true) {
          lab19 = false;
          v_10 = this.limit - this.cursor;
          let lab20 = true;
          while (lab20 == true) {
            lab20 = false;
            // call mark_ndAn, line 384
            if (!this.r_mark_ndAn()) {
              break;
            }
            break lab19;
          }
          this.cursor = this.limit - v_10;
          // call mark_nU, line 384
          if (!this.r_mark_nU()) {
            break lab18;
          }
        }
        // (, line 384
        // or, line 384
        let lab21 = true;
        lab21: while (lab21 == true) {
          lab21 = false;
          v_11 = this.limit - this.cursor;
          let lab22 = true;
          while (lab22 == true) {
            lab22 = false;
            // (, line 384
            // call mark_sU, line 384
            if (!this.r_mark_sU()) {
              break;
            }
            // ], line 384
            this.bra = this.cursor;
            // delete, line 384
            if (!this.slice_del()) {
              return false;
            }
            // try, line 384
            v_12 = this.limit - this.cursor;
            let lab23 = true;
            while (lab23 == true) {
              lab23 = false;
              // (, line 384
              // [, line 384
              this.ket = this.cursor;
              // call mark_lAr, line 384
              if (!this.r_mark_lAr()) {
                this.cursor = this.limit - v_12;
                break;
              }
              // ], line 384
              this.bra = this.cursor;
              // delete, line 384
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 384
              if (!this.r_stem_suffix_chain_before_ki()) {
                this.cursor = this.limit - v_12;
                break;
              }
            }
            break lab21;
          }
          this.cursor = this.limit - v_11;
          // (, line 384
          // call mark_lArI, line 384
          if (!this.r_mark_lArI()) {
            break lab18;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab24 = true;
      while (lab24 == true) {
        lab24 = false;
        // (, line 386
        // [, line 386
        this.ket = this.cursor;
        // call mark_DAn, line 386
        if (!this.r_mark_DAn()) {
          break;
        }
        // ], line 386
        this.bra = this.cursor;
        // delete, line 386
        if (!this.slice_del()) {
          return false;
        }
        // try, line 386
        v_13 = this.limit - this.cursor;
        let lab25 = true;
        lab25: while (lab25 == true) {
          lab25 = false;
          // (, line 386
          // [, line 386
          this.ket = this.cursor;
          // (, line 387
          // or, line 389
          let lab26 = true;
          lab26: while (lab26 == true) {
            lab26 = false;
            v_14 = this.limit - this.cursor;
            let lab27 = true;
            while (lab27 == true) {
              lab27 = false;
              // (, line 388
              // call mark_possessives, line 388
              if (!this.r_mark_possessives()) {
                break;
              }
              // ], line 388
              this.bra = this.cursor;
              // delete, line 388
              if (!this.slice_del()) {
                return false;
              }
              // try, line 388
              v_15 = this.limit - this.cursor;
              let lab28 = true;
              while (lab28 == true) {
                lab28 = false;
                // (, line 388
                // [, line 388
                this.ket = this.cursor;
                // call mark_lAr, line 388
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_15;
                  break;
                }
                // ], line 388
                this.bra = this.cursor;
                // delete, line 388
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 388
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_15;
                  break;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            let lab29 = true;
            while (lab29 == true) {
              lab29 = false;
              // (, line 390
              // call mark_lAr, line 390
              if (!this.r_mark_lAr()) {
                break;
              }
              // ], line 390
              this.bra = this.cursor;
              // delete, line 390
              if (!this.slice_del()) {
                return false;
              }
              // try, line 390
              v_16 = this.limit - this.cursor;
              let lab30 = true;
              while (lab30 == true) {
                lab30 = false;
                // (, line 390
                // call stem_suffix_chain_before_ki, line 390
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_16;
                  break;
                }
              }
              break lab26;
            }
            this.cursor = this.limit - v_14;
            // (, line 392
            // call stem_suffix_chain_before_ki, line 392
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_13;
              break lab25;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab31 = true;
      lab31: while (lab31 == true) {
        lab31 = false;
        // (, line 396
        // [, line 396
        this.ket = this.cursor;
        // or, line 396
        let lab32 = true;
        lab32: while (lab32 == true) {
          lab32 = false;
          v_17 = this.limit - this.cursor;
          let lab33 = true;
          while (lab33 == true) {
            lab33 = false;
            // call mark_nUn, line 396
            if (!this.r_mark_nUn()) {
              break;
            }
            break lab32;
          }
          this.cursor = this.limit - v_17;
          // call mark_ylA, line 396
          if (!this.r_mark_ylA()) {
            break lab31;
          }
        }
        // ], line 396
        this.bra = this.cursor;
        // delete, line 396
        if (!this.slice_del()) {
          return false;
        }
        // try, line 397
        v_18 = this.limit - this.cursor;
        let lab34 = true;
        lab34: while (lab34 == true) {
          lab34 = false;
          // (, line 397
          // or, line 399
          let lab35 = true;
          lab35: while (lab35 == true) {
            lab35 = false;
            v_19 = this.limit - this.cursor;
            let lab36 = true;
            while (lab36 == true) {
              lab36 = false;
              // (, line 398
              // [, line 398
              this.ket = this.cursor;
              // call mark_lAr, line 398
              if (!this.r_mark_lAr()) {
                break;
              }
              // ], line 398
              this.bra = this.cursor;
              // delete, line 398
              if (!this.slice_del()) {
                return false;
              }
              // call stem_suffix_chain_before_ki, line 398
              if (!this.r_stem_suffix_chain_before_ki()) {
                break;
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            let lab37 = true;
            lab37: while (lab37 == true) {
              lab37 = false;
              // (, line 400
              // [, line 400
              this.ket = this.cursor;
              // or, line 400
              let lab38 = true;
              lab38: while (lab38 == true) {
                lab38 = false;
                v_20 = this.limit - this.cursor;
                let lab39 = true;
                while (lab39 == true) {
                  lab39 = false;
                  // call mark_possessives, line 400
                  if (!this.r_mark_possessives()) {
                    break;
                  }
                  break lab38;
                }
                this.cursor = this.limit - v_20;
                // call mark_sU, line 400
                if (!this.r_mark_sU()) {
                  break lab37;
                }
              }
              // ], line 400
              this.bra = this.cursor;
              // delete, line 400
              if (!this.slice_del()) {
                return false;
              }
              // try, line 400
              v_21 = this.limit - this.cursor;
              let lab40 = true;
              while (lab40 == true) {
                lab40 = false;
                // (, line 400
                // [, line 400
                this.ket = this.cursor;
                // call mark_lAr, line 400
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_21;
                  break;
                }
                // ], line 400
                this.bra = this.cursor;
                // delete, line 400
                if (!this.slice_del()) {
                  return false;
                }
                // call stem_suffix_chain_before_ki, line 400
                if (!this.r_stem_suffix_chain_before_ki()) {
                  this.cursor = this.limit - v_21;
                  break;
                }
              }
              break lab35;
            }
            this.cursor = this.limit - v_19;
            // call stem_suffix_chain_before_ki, line 402
            if (!this.r_stem_suffix_chain_before_ki()) {
              this.cursor = this.limit - v_18;
              break lab34;
            }
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab41 = true;
      while (lab41 == true) {
        lab41 = false;
        // (, line 406
        // [, line 406
        this.ket = this.cursor;
        // call mark_lArI, line 406
        if (!this.r_mark_lArI()) {
          break;
        }
        // ], line 406
        this.bra = this.cursor;
        // delete, line 406
        if (!this.slice_del()) {
          return false;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab42 = true;
      while (lab42 == true) {
        lab42 = false;
        // (, line 408
        // call stem_suffix_chain_before_ki, line 408
        if (!this.r_stem_suffix_chain_before_ki()) {
          break;
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      let lab43 = true;
      lab43: while (lab43 == true) {
        lab43 = false;
        // (, line 410
        // [, line 410
        this.ket = this.cursor;
        // or, line 410
        let lab44 = true;
        lab44: while (lab44 == true) {
          lab44 = false;
          v_22 = this.limit - this.cursor;
          let lab45 = true;
          while (lab45 == true) {
            lab45 = false;
            // call mark_DA, line 410
            if (!this.r_mark_DA()) {
              break;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          let lab46 = true;
          while (lab46 == true) {
            lab46 = false;
            // call mark_yU, line 410
            if (!this.r_mark_yU()) {
              break;
            }
            break lab44;
          }
          this.cursor = this.limit - v_22;
          // call mark_yA, line 410
          if (!this.r_mark_yA()) {
            break lab43;
          }
        }
        // ], line 410
        this.bra = this.cursor;
        // delete, line 410
        if (!this.slice_del()) {
          return false;
        }
        // try, line 410
        v_23 = this.limit - this.cursor;
        let lab47 = true;
        lab47: while (lab47 == true) {
          lab47 = false;
          // (, line 410
          // [, line 410
          this.ket = this.cursor;
          // (, line 410
          // or, line 410
          let lab48 = true;
          lab48: while (lab48 == true) {
            lab48 = false;
            v_24 = this.limit - this.cursor;
            let lab49 = true;
            while (lab49 == true) {
              lab49 = false;
              // (, line 410
              // call mark_possessives, line 410
              if (!this.r_mark_possessives()) {
                break;
              }
              // ], line 410
              this.bra = this.cursor;
              // delete, line 410
              if (!this.slice_del()) {
                return false;
              }
              // try, line 410
              v_25 = this.limit - this.cursor;
              let lab50 = true;
              while (lab50 == true) {
                lab50 = false;
                // (, line 410
                // [, line 410
                this.ket = this.cursor;
                // call mark_lAr, line 410
                if (!this.r_mark_lAr()) {
                  this.cursor = this.limit - v_25;
                  break;
                }
              }
              break lab48;
            }
            this.cursor = this.limit - v_24;
            // call mark_lAr, line 410
            if (!this.r_mark_lAr()) {
              this.cursor = this.limit - v_23;
              break lab47;
            }
          }
          // ], line 410
          this.bra = this.cursor;
          // delete, line 410
          if (!this.slice_del()) {
            return false;
          }
          // [, line 410
          this.ket = this.cursor;
          // call stem_suffix_chain_before_ki, line 410
          if (!this.r_stem_suffix_chain_before_ki()) {
            this.cursor = this.limit - v_23;
            break;
          }
        }
        break lab0;
      }
      this.cursor = this.limit - v_1;
      // (, line 412
      // [, line 412
      this.ket = this.cursor;
      // or, line 412
      let lab51 = true;
      lab51: while (lab51 == true) {
        lab51 = false;
        v_26 = this.limit - this.cursor;
        let lab52 = true;
        while (lab52 == true) {
          lab52 = false;
          // call mark_possessives, line 412
          if (!this.r_mark_possessives()) {
            break;
          }
          break lab51;
        }
        this.cursor = this.limit - v_26;
        // call mark_sU, line 412
        if (!this.r_mark_sU()) {
          return false;
        }
      }
      // ], line 412
      this.bra = this.cursor;
      // delete, line 412
      if (!this.slice_del()) {
        return false;
      }
      // try, line 412
      v_27 = this.limit - this.cursor;
      let lab53 = true;
      while (lab53 == true) {
        lab53 = false;
        // (, line 412
        // [, line 412
        this.ket = this.cursor;
        // call mark_lAr, line 412
        if (!this.r_mark_lAr()) {
          this.cursor = this.limit - v_27;
          break;
        }
        // ], line 412
        this.bra = this.cursor;
        // delete, line 412
        if (!this.slice_del()) {
          return false;
        }
        // call stem_suffix_chain_before_ki, line 412
        if (!this.r_stem_suffix_chain_before_ki()) {
          this.cursor = this.limit - v_27;
          break;
        }
      }
    }
    return true;
  }

  r_post_process_last_consonants() {
    let among_var;
    // (, line 415
    // [, line 416
    this.ket = this.cursor;
    // substring, line 416
    among_var = this.find_among_b(StemmerTr.a_23, 4);
    if (among_var == 0) {
      return false;
    }
    // ], line 416
    this.bra = this.cursor;
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 417
        // <-, line 417
        if (!this.slice_from('p')) {
          return false;
        }
        break;
      case 2:
        // (, line 418
        // <-, line 418
        if (!this.slice_from('\u00E7')) {
          return false;
        }
        break;
      case 3:
        // (, line 419
        // <-, line 419
        if (!this.slice_from('t')) {
          return false;
        }
        break;
      case 4:
        // (, line 420
        // <-, line 420
        if (!this.slice_from('k')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_append_U_to_stems_ending_with_d_or_g() {
    let v_1;
    let v_2;
    let v_3;
    let v_4;
    let v_5;
    let v_6;
    let v_7;
    let v_8;
    let v_9;
    let v_10;
    let v_11;
    let v_12;
    let v_13;
    let v_14;
    let v_15;
    // (, line 430
    // test, line 431
    v_1 = this.limit - this.cursor;
    // (, line 431
    // or, line 431
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_2 = this.limit - this.cursor;
      let lab1 = true;
      while (lab1 == true) {
        lab1 = false;
        // literal, line 431
        if (!this.eq_s_b(1, 'd')) {
          break;
        }
        break lab0;
      }
      this.cursor = this.limit - v_2;
      // literal, line 431
      if (!this.eq_s_b(1, 'g')) {
        return false;
      }
    }
    this.cursor = this.limit - v_1;
    // or, line 433
    let lab2 = true;
    lab2: while (lab2 == true) {
      lab2 = false;
      v_3 = this.limit - this.cursor;
      let lab3 = true;
      lab3: while (lab3 == true) {
        lab3 = false;
        // (, line 432
        // test, line 432
        v_4 = this.limit - this.cursor;
        // (, line 432
        // (, line 432
        // goto, line 432
        golab4: while (true) {
          v_5 = this.limit - this.cursor;
          let lab5 = true;
          while (lab5 == true) {
            lab5 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
              break;
            }
            this.cursor = this.limit - v_5;
            break golab4;
          }
          this.cursor = this.limit - v_5;
          if (this.cursor <= this.limit_backward) {
            break lab3;
          }
          this.cursor--;
        }
        // or, line 432
        let lab6 = true;
        lab6: while (lab6 == true) {
          lab6 = false;
          v_6 = this.limit - this.cursor;
          let lab7 = true;
          while (lab7 == true) {
            lab7 = false;
            // literal, line 432
            if (!this.eq_s_b(1, 'a')) {
              break;
            }
            break lab6;
          }
          this.cursor = this.limit - v_6;
          // literal, line 432
          if (!this.eq_s_b(1, '\u0131')) {
            break lab3;
          }
        }
        this.cursor = this.limit - v_4;
        // <+, line 432
        {
          var c = this.cursor;
          this.insert(this.cursor, this.cursor, '\u0131');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab8 = true;
      lab8: while (lab8 == true) {
        lab8 = false;
        // (, line 434
        // test, line 434
        v_7 = this.limit - this.cursor;
        // (, line 434
        // (, line 434
        // goto, line 434
        golab9: while (true) {
          v_8 = this.limit - this.cursor;
          let lab10 = true;
          while (lab10 == true) {
            lab10 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
              break;
            }
            this.cursor = this.limit - v_8;
            break golab9;
          }
          this.cursor = this.limit - v_8;
          if (this.cursor <= this.limit_backward) {
            break lab8;
          }
          this.cursor--;
        }
        // or, line 434
        let lab11 = true;
        lab11: while (lab11 == true) {
          lab11 = false;
          v_9 = this.limit - this.cursor;
          let lab12 = true;
          while (lab12 == true) {
            lab12 = false;
            // literal, line 434
            if (!this.eq_s_b(1, 'e')) {
              break;
            }
            break lab11;
          }
          this.cursor = this.limit - v_9;
          // literal, line 434
          if (!this.eq_s_b(1, 'i')) {
            break lab8;
          }
        }
        this.cursor = this.limit - v_7;
        // <+, line 434
        {
          var c = this.cursor;
          this.insert(this.cursor, this.cursor, 'i');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      let lab13 = true;
      lab13: while (lab13 == true) {
        lab13 = false;
        // (, line 436
        // test, line 436
        v_10 = this.limit - this.cursor;
        // (, line 436
        // (, line 436
        // goto, line 436
        golab14: while (true) {
          v_11 = this.limit - this.cursor;
          let lab15 = true;
          while (lab15 == true) {
            lab15 = false;
            if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
              break;
            }
            this.cursor = this.limit - v_11;
            break golab14;
          }
          this.cursor = this.limit - v_11;
          if (this.cursor <= this.limit_backward) {
            break lab13;
          }
          this.cursor--;
        }
        // or, line 436
        let lab16 = true;
        lab16: while (lab16 == true) {
          lab16 = false;
          v_12 = this.limit - this.cursor;
          let lab17 = true;
          while (lab17 == true) {
            lab17 = false;
            // literal, line 436
            if (!this.eq_s_b(1, 'o')) {
              break;
            }
            break lab16;
          }
          this.cursor = this.limit - v_12;
          // literal, line 436
          if (!this.eq_s_b(1, 'u')) {
            break lab13;
          }
        }
        this.cursor = this.limit - v_10;
        // <+, line 436
        {
          var c = this.cursor;
          this.insert(this.cursor, this.cursor, 'u');
          this.cursor = c;
        }
        break lab2;
      }
      this.cursor = this.limit - v_3;
      // (, line 438
      // test, line 438
      v_13 = this.limit - this.cursor;
      // (, line 438
      // (, line 438
      // goto, line 438
      golab18: while (true) {
        v_14 = this.limit - this.cursor;
        let lab19 = true;
        while (lab19 == true) {
          lab19 = false;
          if (!this.in_grouping_b(StemmerTr.g_vowel, 97, 305)) {
            break;
          }
          this.cursor = this.limit - v_14;
          break golab18;
        }
        this.cursor = this.limit - v_14;
        if (this.cursor <= this.limit_backward) {
          return false;
        }
        this.cursor--;
      }
      // or, line 438
      let lab20 = true;
      lab20: while (lab20 == true) {
        lab20 = false;
        v_15 = this.limit - this.cursor;
        let lab21 = true;
        while (lab21 == true) {
          lab21 = false;
          // literal, line 438
          if (!this.eq_s_b(1, '\u00F6')) {
            break;
          }
          break lab20;
        }
        this.cursor = this.limit - v_15;
        // literal, line 438
        if (!this.eq_s_b(1, '\u00FC')) {
          return false;
        }
      }
      this.cursor = this.limit - v_13;
      // <+, line 438
      {
        var c = this.cursor;
        this.insert(this.cursor, this.cursor, '\u00FC');
        this.cursor = c;
      }
    }
    return true;
  }

  r_more_than_one_syllable_word() {
    let v_1;
    let v_3;
    // (, line 445
    // test, line 446
    v_1 = this.cursor;
    // (, line 446
    // atleast, line 446
    {
      let v_2 = 2;
      // atleast, line 446
      replab0: while (true) {
        v_3 = this.cursor;
        let lab1 = true;
        lab1: while (lab1 == true) {
          lab1 = false;
          // (, line 446
          // gopast, line 446
          golab2: while (true) {
            let lab3 = true;
            while (lab3 == true) {
              lab3 = false;
              if (!this.in_grouping(StemmerTr.g_vowel, 97, 305)) {
                break;
              }
              break golab2;
            }
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
          }
          v_2--;
          continue replab0;
        }
        this.cursor = v_3;
        break;
      }
      if (v_2 > 0) {
        return false;
      }
    }
    this.cursor = v_1;
    return true;
  }

  r_is_reserved_word() {
    let v_1;
    let v_2;
    let v_4;
    // (, line 449
    // or, line 451
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.cursor;
      let lab1 = true;
      lab1: while (lab1 == true) {
        lab1 = false;
        // test, line 450
        v_2 = this.cursor;
        // (, line 450
        // gopast, line 450
        golab2: while (true) {
          let lab3 = true;
          while (lab3 == true) {
            lab3 = false;
            // literal, line 450
            if (!this.eq_s(2, 'ad')) {
              break;
            }
            break golab2;
          }
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        // (, line 450
        this.I_strlen = 2;
        // (, line 450
        if (!(this.I_strlen == this.limit)) {
          break;
        }
        this.cursor = v_2;
        break lab0;
      }
      this.cursor = v_1;
      // test, line 452
      v_4 = this.cursor;
      // (, line 452
      // gopast, line 452
      golab4: while (true) {
        let lab5 = true;
        while (lab5 == true) {
          lab5 = false;
          // literal, line 452
          if (!this.eq_s(5, 'soyad')) {
            break;
          }
          break golab4;
        }
        if (this.cursor >= this.limit) {
          return false;
        }
        this.cursor++;
      }
      // (, line 452
      this.I_strlen = 5;
      // (, line 452
      if (!(this.I_strlen == this.limit)) {
        return false;
      }
      this.cursor = v_4;
    }
    return true;
  }

  r_postlude() {
    let v_1;
    let v_2;
    let v_3;
    // (, line 455
    // not, line 456
    {
      v_1 = this.cursor;
      let lab0 = true;
      while (lab0 == true) {
        lab0 = false;
        // (, line 456
        // call is_reserved_word, line 456
        if (!this.r_is_reserved_word()) {
          break;
        }
        return false;
      }
      this.cursor = v_1;
    }
    // backwards, line 457
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // (, line 457
    // do, line 458
    v_2 = this.limit - this.cursor;
    let lab1 = true;
    while (lab1 == true) {
      lab1 = false;
      // call append_U_to_stems_ending_with_d_or_g, line 458
      if (!this.r_append_U_to_stems_ending_with_d_or_g()) {
        break;
      }
    }
    this.cursor = this.limit - v_2;
    // do, line 459
    v_3 = this.limit - this.cursor;
    let lab2 = true;
    while (lab2 == true) {
      lab2 = false;
      // call post_process_last_consonants, line 459
      if (!this.r_post_process_last_consonants()) {
        break;
      }
    }
    this.cursor = this.limit - v_3;
    this.cursor = this.limit_backward;
    return true;
  }

  innerStem() {
    let v_1;
    let v_2;
    // (, line 464
    // (, line 465
    // call more_than_one_syllable_word, line 465
    if (!this.r_more_than_one_syllable_word()) {
      return false;
    }
    // (, line 466
    // backwards, line 467
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // (, line 467
    // do, line 468
    v_1 = this.limit - this.cursor;
    let lab0 = true;
    while (lab0 == true) {
      lab0 = false;
      // call stem_nominal_verb_suffixes, line 468
      if (!this.r_stem_nominal_verb_suffixes()) {
        break;
      }
    }
    this.cursor = this.limit - v_1;
    // Boolean test continue_stemming_noun_suffixes, line 469
    if (!this.B_continue_stemming_noun_suffixes) {
      return false;
    }
    // do, line 470
    v_2 = this.limit - this.cursor;
    let lab1 = true;
    while (lab1 == true) {
      lab1 = false;
      // call stem_noun_suffixes, line 470
      if (!this.r_stem_noun_suffixes()) {
        break;
      }
    }
    this.cursor = this.limit - v_2;
    this.cursor = this.limit_backward; // call postlude, line 473
    if (!this.r_postlude()) {
      return false;
    }
    return true;
  }
}
StemmerTr.methodObject = new StemmerTr();

StemmerTr.a_0 = [
  new Among('m', -1, -1),
  new Among('n', -1, -1),
  new Among('miz', -1, -1),
  new Among('niz', -1, -1),
  new Among('muz', -1, -1),
  new Among('nuz', -1, -1),
  new Among('m\u00FCz', -1, -1),
  new Among('n\u00FCz', -1, -1),
  new Among('m\u0131z', -1, -1),
  new Among('n\u0131z', -1, -1)
];

StemmerTr.a_1 = [
  new Among('leri', -1, -1),
  new Among('lar\u0131', -1, -1)
];

StemmerTr.a_2 = [
  new Among('ni', -1, -1),
  new Among('nu', -1, -1),
  new Among('n\u00FC', -1, -1),
  new Among('n\u0131', -1, -1)
];

StemmerTr.a_3 = [
  new Among('in', -1, -1),
  new Among('un', -1, -1),
  new Among('\u00FCn', -1, -1),
  new Among('\u0131n', -1, -1)
];

StemmerTr.a_4 = [new Among('a', -1, -1), new Among('e', -1, -1)];

StemmerTr.a_5 = [new Among('na', -1, -1), new Among('ne', -1, -1)];

StemmerTr.a_6 = [
  new Among('da', -1, -1),
  new Among('ta', -1, -1),
  new Among('de', -1, -1),
  new Among('te', -1, -1)
];

StemmerTr.a_7 = [new Among('nda', -1, -1), new Among('nde', -1, -1)];

StemmerTr.a_8 = [
  new Among('dan', -1, -1),
  new Among('tan', -1, -1),
  new Among('den', -1, -1),
  new Among('ten', -1, -1)
];

StemmerTr.a_9 = [new Among('ndan', -1, -1), new Among('nden', -1, -1)];

StemmerTr.a_10 = [new Among('la', -1, -1), new Among('le', -1, -1)];

StemmerTr.a_11 = [new Among('ca', -1, -1), new Among('ce', -1, -1)];

StemmerTr.a_12 = [
  new Among('im', -1, -1),
  new Among('um', -1, -1),
  new Among('\u00FCm', -1, -1),
  new Among('\u0131m', -1, -1)
];

StemmerTr.a_13 = [
  new Among('sin', -1, -1),
  new Among('sun', -1, -1),
  new Among('s\u00FCn', -1, -1),
  new Among('s\u0131n', -1, -1)
];

StemmerTr.a_14 = [
  new Among('iz', -1, -1),
  new Among('uz', -1, -1),
  new Among('\u00FCz', -1, -1),
  new Among('\u0131z', -1, -1)
];

StemmerTr.a_15 = [
  new Among('siniz', -1, -1),
  new Among('sunuz', -1, -1),
  new Among('s\u00FCn\u00FCz', -1, -1),
  new Among('s\u0131n\u0131z', -1, -1)
];

StemmerTr.a_16 = [new Among('lar', -1, -1), new Among('ler', -1, -1)];

StemmerTr.a_17 = [
  new Among('niz', -1, -1),
  new Among('nuz', -1, -1),
  new Among('n\u00FCz', -1, -1),
  new Among('n\u0131z', -1, -1)
];

StemmerTr.a_18 = [
  new Among('dir', -1, -1),
  new Among('tir', -1, -1),
  new Among('dur', -1, -1),
  new Among('tur', -1, -1),
  new Among('d\u00FCr', -1, -1),
  new Among('t\u00FCr', -1, -1),
  new Among('d\u0131r', -1, -1),
  new Among('t\u0131r', -1, -1)
];

StemmerTr.a_19 = [
  new Among('cas\u0131na', -1, -1),
  new Among('cesine', -1, -1)
];

StemmerTr.a_20 = [
  new Among('di', -1, -1),
  new Among('ti', -1, -1),
  new Among('dik', -1, -1),
  new Among('tik', -1, -1),
  new Among('duk', -1, -1),
  new Among('tuk', -1, -1),
  new Among('d\u00FCk', -1, -1),
  new Among('t\u00FCk', -1, -1),
  new Among('d\u0131k', -1, -1),
  new Among('t\u0131k', -1, -1),
  new Among('dim', -1, -1),
  new Among('tim', -1, -1),
  new Among('dum', -1, -1),
  new Among('tum', -1, -1),
  new Among('d\u00FCm', -1, -1),
  new Among('t\u00FCm', -1, -1),
  new Among('d\u0131m', -1, -1),
  new Among('t\u0131m', -1, -1),
  new Among('din', -1, -1),
  new Among('tin', -1, -1),
  new Among('dun', -1, -1),
  new Among('tun', -1, -1),
  new Among('d\u00FCn', -1, -1),
  new Among('t\u00FCn', -1, -1),
  new Among('d\u0131n', -1, -1),
  new Among('t\u0131n', -1, -1),
  new Among('du', -1, -1),
  new Among('tu', -1, -1),
  new Among('d\u00FC', -1, -1),
  new Among('t\u00FC', -1, -1),
  new Among('d\u0131', -1, -1),
  new Among('t\u0131', -1, -1)
];

StemmerTr.a_21 = [
  new Among('sa', -1, -1),
  new Among('se', -1, -1),
  new Among('sak', -1, -1),
  new Among('sek', -1, -1),
  new Among('sam', -1, -1),
  new Among('sem', -1, -1),
  new Among('san', -1, -1),
  new Among('sen', -1, -1)
];

StemmerTr.a_22 = [
  new Among('mi\u015F', -1, -1),
  new Among('mu\u015F', -1, -1),
  new Among('m\u00FC\u015F', -1, -1),
  new Among('m\u0131\u015F', -1, -1)
];

StemmerTr.a_23 = [
  new Among('b', -1, 1),
  new Among('c', -1, 2),
  new Among('d', -1, 3),
  new Among('\u011F', -1, 4)
];

StemmerTr.g_vowel = [
  17,
  65,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  32,
  8,
  0,
  0,
  0,
  0,
  0,
  0,
  1
];

StemmerTr.g_U = [
  1,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  8,
  0,
  0,
  0,
  0,
  0,
  0,
  1
];

StemmerTr.g_vowel1 = [
  1,
  64,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1
];

StemmerTr.g_vowel2 = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  130
];

StemmerTr.g_vowel3 = [
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1
];

StemmerTr.g_vowel4 = [17];

StemmerTr.g_vowel5 = [65];

StemmerTr.g_vowel6 = [65];

module.exports = StemmerTr;

