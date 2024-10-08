const { Among, BaseStemmer } = require('@bokata/core');

/* eslint-disable */
class StemmerHu extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-hu';
    this.I_p1 = 0;
  }

  copy_from(other) {
    this.I_p1 = other.I_p1;
    super.copy_from(other);
  }

  r_mark_regions() {
    let v_1;
    let v_2;
    let v_3;
    // (, line 44
    this.I_p1 = this.limit;
    // or, line 51
    let lab0 = true;
    lab0: while (lab0 == true) {
      lab0 = false;
      v_1 = this.cursor;
      let lab1 = true;
      lab1: while (lab1 == true) {
        lab1 = false;
        // (, line 48
        if (!this.in_grouping(StemmerHu.g_v, 97, 252)) {
          break;
        }
        // goto, line 48
        golab2: while (true) {
          v_2 = this.cursor;
          let lab3 = true;
          while (lab3 == true) {
            lab3 = false;
            if (!this.out_grouping(StemmerHu.g_v, 97, 252)) {
              break;
            }
            this.cursor = v_2;
            break golab2;
          }
          this.cursor = v_2;
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        // or, line 49
        let lab4 = true;
        lab4: while (lab4 == true) {
          lab4 = false;
          v_3 = this.cursor;
          let lab5 = true;
          while (lab5 == true) {
            lab5 = false;
            // among, line 49
            if (this.find_among(StemmerHu.a_0, 8) == 0) {
              break;
            }
            break lab4;
          }
          this.cursor = v_3;
          // next, line 49
          if (this.cursor >= this.limit) {
            break lab1;
          }
          this.cursor++;
        }
        // setmark p1, line 50
        this.I_p1 = this.cursor;
        break lab0;
      }
      this.cursor = v_1;
      // (, line 53
      if (!this.out_grouping(StemmerHu.g_v, 97, 252)) {
        return false;
      }
      // gopast, line 53
      golab6: while (true) {
        let lab7 = true;
        while (lab7 == true) {
          lab7 = false;
          if (!this.in_grouping(StemmerHu.g_v, 97, 252)) {
            break;
          }
          break golab6;
        }
        if (this.cursor >= this.limit) {
          return false;
        }
        this.cursor++;
      }
      // setmark p1, line 53
      this.I_p1 = this.cursor;
    }
    return true;
  }

  r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  }

  r_v_ending() {
    let among_var;
    // (, line 60
    // [, line 61
    this.ket = this.cursor;
    // substring, line 61
    among_var = this.find_among_b(StemmerHu.a_1, 2);
    if (among_var == 0) {
      return false;
    }
    // ], line 61
    this.bra = this.cursor;
    // call R1, line 61
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 62
        // <-, line 62
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 2:
        // (, line 63
        // <-, line 63
        if (!this.slice_from('e')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_double() {
    let v_1;
    // (, line 67
    // test, line 68
    v_1 = this.limit - this.cursor;
    // among, line 68
    if (this.find_among_b(StemmerHu.a_2, 23) == 0) {
      return false;
    }
    this.cursor = this.limit - v_1;
    return true;
  }

  r_undouble() {
    // (, line 72
    // next, line 73
    if (this.cursor <= this.limit_backward) {
      return false;
    }
    this.cursor--;
    // [, line 73
    this.ket = this.cursor;
    // hop, line 73
    {
      const c = this.cursor - 1;
      if (this.limit_backward > c || c > this.limit) {
        return false;
      }
      this.cursor = c;
    }
    // ], line 73
    this.bra = this.cursor;
    // delete, line 73
    if (!this.slice_del()) {
      return false;
    }
    return true;
  }

  r_instrum() {
    let among_var;
    // (, line 76
    // [, line 77
    this.ket = this.cursor;
    // substring, line 77
    among_var = this.find_among_b(StemmerHu.a_3, 2);
    if (among_var == 0) {
      return false;
    }
    // ], line 77
    this.bra = this.cursor;
    // call R1, line 77
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 78
        // call double, line 78
        if (!this.r_double()) {
          return false;
        }
        break;
      case 2:
        // (, line 79
        // call double, line 79
        if (!this.r_double()) {
          return false;
        }
        break;
    }
    // delete, line 81
    if (!this.slice_del()) {
      return false;
    }
    // call undouble, line 82
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_case() {
    // (, line 86
    // [, line 87
    this.ket = this.cursor;
    // substring, line 87
    if (this.find_among_b(StemmerHu.a_4, 44) == 0) {
      return false;
    }
    // ], line 87
    this.bra = this.cursor;
    // call R1, line 87
    if (!this.r_R1()) {
      return false;
    }
    // delete, line 111
    if (!this.slice_del()) {
      return false;
    }
    // call v_ending, line 112
    if (!this.r_v_ending()) {
      return false;
    }
    return true;
  }

  r_case_special() {
    let among_var;
    // (, line 115
    // [, line 116
    this.ket = this.cursor;
    // substring, line 116
    among_var = this.find_among_b(StemmerHu.a_5, 3);
    if (among_var == 0) {
      return false;
    }
    // ], line 116
    this.bra = this.cursor;
    // call R1, line 116
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 117
        // <-, line 117
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 2:
        // (, line 118
        // <-, line 118
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 3:
        // (, line 119
        // <-, line 119
        if (!this.slice_from('a')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_case_other() {
    let among_var;
    // (, line 123
    // [, line 124
    this.ket = this.cursor;
    // substring, line 124
    among_var = this.find_among_b(StemmerHu.a_6, 6);
    if (among_var == 0) {
      return false;
    }
    // ], line 124
    this.bra = this.cursor;
    // call R1, line 124
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 125
        // delete, line 125
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        // (, line 126
        // delete, line 126
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 3:
        // (, line 127
        // <-, line 127
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 4:
        // (, line 128
        // <-, line 128
        if (!this.slice_from('e')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_factive() {
    let among_var;
    // (, line 132
    // [, line 133
    this.ket = this.cursor;
    // substring, line 133
    among_var = this.find_among_b(StemmerHu.a_7, 2);
    if (among_var == 0) {
      return false;
    }
    // ], line 133
    this.bra = this.cursor;
    // call R1, line 133
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 134
        // call double, line 134
        if (!this.r_double()) {
          return false;
        }
        break;
      case 2:
        // (, line 135
        // call double, line 135
        if (!this.r_double()) {
          return false;
        }
        break;
    }
    // delete, line 137
    if (!this.slice_del()) {
      return false;
    }
    // call undouble, line 138
    if (!this.r_undouble()) {
      return false;
    }
    return true;
  }

  r_plural() {
    let among_var;
    // (, line 141
    // [, line 142
    this.ket = this.cursor;
    // substring, line 142
    among_var = this.find_among_b(StemmerHu.a_8, 7);
    if (among_var == 0) {
      return false;
    }
    // ], line 142
    this.bra = this.cursor;
    // call R1, line 142
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 143
        // <-, line 143
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 2:
        // (, line 144
        // <-, line 144
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 3:
        // (, line 145
        // delete, line 145
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 4:
        // (, line 146
        // delete, line 146
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        // (, line 147
        // delete, line 147
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 6:
        // (, line 148
        // delete, line 148
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 7:
        // (, line 149
        // delete, line 149
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_owned() {
    let among_var;
    // (, line 153
    // [, line 154
    this.ket = this.cursor;
    // substring, line 154
    among_var = this.find_among_b(StemmerHu.a_9, 12);
    if (among_var == 0) {
      return false;
    }
    // ], line 154
    this.bra = this.cursor;
    // call R1, line 154
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 155
        // delete, line 155
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        // (, line 156
        // <-, line 156
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 3:
        // (, line 157
        // <-, line 157
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 4:
        // (, line 158
        // delete, line 158
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        // (, line 159
        // <-, line 159
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 6:
        // (, line 160
        // <-, line 160
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 7:
        // (, line 161
        // delete, line 161
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 8:
        // (, line 162
        // <-, line 162
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 9:
        // (, line 163
        // delete, line 163
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  r_sing_owner() {
    let among_var;
    // (, line 167
    // [, line 168
    this.ket = this.cursor;
    // substring, line 168
    among_var = this.find_among_b(StemmerHu.a_10, 31);
    if (among_var == 0) {
      return false;
    }
    // ], line 168
    this.bra = this.cursor;
    // call R1, line 168
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 169
        // delete, line 169
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        // (, line 170
        // <-, line 170
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 3:
        // (, line 171
        // <-, line 171
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 4:
        // (, line 172
        // delete, line 172
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        // (, line 173
        // <-, line 173
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 6:
        // (, line 174
        // <-, line 174
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 7:
        // (, line 175
        // delete, line 175
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 8:
        // (, line 176
        // delete, line 176
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 9:
        // (, line 177
        // delete, line 177
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 10:
        // (, line 178
        // <-, line 178
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 11:
        // (, line 179
        // <-, line 179
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 12:
        // (, line 180
        // delete, line 180
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 13:
        // (, line 181
        // delete, line 181
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 14:
        // (, line 182
        // <-, line 182
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 15:
        // (, line 183
        // <-, line 183
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 16:
        // (, line 184
        // delete, line 184
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 17:
        // (, line 185
        // delete, line 185
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 18:
        // (, line 186
        // delete, line 186
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 19:
        // (, line 187
        // <-, line 187
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 20:
        // (, line 188
        // <-, line 188
        if (!this.slice_from('e')) {
          return false;
        }
        break;
    }
    return true;
  }

  r_plur_owner() {
    let among_var;
    // (, line 192
    // [, line 193
    this.ket = this.cursor;
    // substring, line 193
    among_var = this.find_among_b(StemmerHu.a_11, 42);
    if (among_var == 0) {
      return false;
    }
    // ], line 193
    this.bra = this.cursor;
    // call R1, line 193
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 0:
        return false;
      case 1:
        // (, line 194
        // delete, line 194
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 2:
        // (, line 195
        // <-, line 195
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 3:
        // (, line 196
        // <-, line 196
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 4:
        // (, line 197
        // delete, line 197
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 5:
        // (, line 198
        // delete, line 198
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 6:
        // (, line 199
        // delete, line 199
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 7:
        // (, line 200
        // <-, line 200
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 8:
        // (, line 201
        // <-, line 201
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 9:
        // (, line 202
        // delete, line 202
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 10:
        // (, line 203
        // delete, line 203
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 11:
        // (, line 204
        // delete, line 204
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 12:
        // (, line 205
        // <-, line 205
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 13:
        // (, line 206
        // <-, line 206
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 14:
        // (, line 207
        // delete, line 207
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 15:
        // (, line 208
        // delete, line 208
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 16:
        // (, line 209
        // delete, line 209
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 17:
        // (, line 210
        // delete, line 210
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 18:
        // (, line 211
        // <-, line 211
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 19:
        // (, line 212
        // <-, line 212
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 20:
        // (, line 214
        // delete, line 214
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 21:
        // (, line 215
        // delete, line 215
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 22:
        // (, line 216
        // <-, line 216
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 23:
        // (, line 217
        // <-, line 217
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 24:
        // (, line 218
        // delete, line 218
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 25:
        // (, line 219
        // delete, line 219
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 26:
        // (, line 220
        // delete, line 220
        if (!this.slice_del()) {
          return false;
        }
        break;
      case 27:
        // (, line 221
        // <-, line 221
        if (!this.slice_from('a')) {
          return false;
        }
        break;
      case 28:
        // (, line 222
        // <-, line 222
        if (!this.slice_from('e')) {
          return false;
        }
        break;
      case 29:
        // (, line 223
        // delete, line 223
        if (!this.slice_del()) {
          return false;
        }
        break;
    }
    return true;
  }

  innerStem() {
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
    // (, line 228
    // do, line 229
    v_1 = this.cursor;
    let lab0 = true;
    while (lab0 == true) {
      lab0 = false;
      // call mark_regions, line 229
      if (!this.r_mark_regions()) {
        break;
      }
    }
    this.cursor = v_1;
    // backwards, line 230
    this.limit_backward = this.cursor;
    this.cursor = this.limit;
    // (, line 230
    // do, line 231
    v_2 = this.limit - this.cursor;
    let lab1 = true;
    while (lab1 == true) {
      lab1 = false;
      // call instrum, line 231
      if (!this.r_instrum()) {
        break;
      }
    }
    this.cursor = this.limit - v_2;
    // do, line 232
    v_3 = this.limit - this.cursor;
    let lab2 = true;
    while (lab2 == true) {
      lab2 = false;
      // call case, line 232
      if (!this.r_case()) {
        break;
      }
    }
    this.cursor = this.limit - v_3;
    // do, line 233
    v_4 = this.limit - this.cursor;
    let lab3 = true;
    while (lab3 == true) {
      lab3 = false;
      // call case_special, line 233
      if (!this.r_case_special()) {
        break;
      }
    }
    this.cursor = this.limit - v_4;
    // do, line 234
    v_5 = this.limit - this.cursor;
    let lab4 = true;
    while (lab4 == true) {
      lab4 = false;
      // call case_other, line 234
      if (!this.r_case_other()) {
        break;
      }
    }
    this.cursor = this.limit - v_5;
    // do, line 235
    v_6 = this.limit - this.cursor;
    let lab5 = true;
    while (lab5 == true) {
      lab5 = false;
      // call factive, line 235
      if (!this.r_factive()) {
        break;
      }
    }
    this.cursor = this.limit - v_6;
    // do, line 236
    v_7 = this.limit - this.cursor;
    let lab6 = true;
    while (lab6 == true) {
      lab6 = false;
      // call owned, line 236
      if (!this.r_owned()) {
        break;
      }
    }
    this.cursor = this.limit - v_7;
    // do, line 237
    v_8 = this.limit - this.cursor;
    let lab7 = true;
    while (lab7 == true) {
      lab7 = false;
      // call sing_owner, line 237
      if (!this.r_sing_owner()) {
        break;
      }
    }
    this.cursor = this.limit - v_8;
    // do, line 238
    v_9 = this.limit - this.cursor;
    let lab8 = true;
    while (lab8 == true) {
      lab8 = false;
      // call plur_owner, line 238
      if (!this.r_plur_owner()) {
        break;
      }
    }
    this.cursor = this.limit - v_9;
    // do, line 239
    v_10 = this.limit - this.cursor;
    let lab9 = true;
    while (lab9 == true) {
      lab9 = false;
      // call plural, line 239
      if (!this.r_plural()) {
        break;
      }
    }
    this.cursor = this.limit - v_10;
    this.cursor = this.limit_backward;
    return true;
  }
}
StemmerHu.methodObject = new StemmerHu();

StemmerHu.a_0 = [
  new Among('cs', -1, -1),
  new Among('dzs', -1, -1),
  new Among('gy', -1, -1),
  new Among('ly', -1, -1),
  new Among('ny', -1, -1),
  new Among('sz', -1, -1),
  new Among('ty', -1, -1),
  new Among('zs', -1, -1)
];

StemmerHu.a_1 = [new Among('\u00E1', -1, 1), new Among('\u00E9', -1, 2)];

StemmerHu.a_2 = [
  new Among('bb', -1, -1),
  new Among('cc', -1, -1),
  new Among('dd', -1, -1),
  new Among('ff', -1, -1),
  new Among('gg', -1, -1),
  new Among('jj', -1, -1),
  new Among('kk', -1, -1),
  new Among('ll', -1, -1),
  new Among('mm', -1, -1),
  new Among('nn', -1, -1),
  new Among('pp', -1, -1),
  new Among('rr', -1, -1),
  new Among('ccs', -1, -1),
  new Among('ss', -1, -1),
  new Among('zzs', -1, -1),
  new Among('tt', -1, -1),
  new Among('vv', -1, -1),
  new Among('ggy', -1, -1),
  new Among('lly', -1, -1),
  new Among('nny', -1, -1),
  new Among('tty', -1, -1),
  new Among('ssz', -1, -1),
  new Among('zz', -1, -1)
];

StemmerHu.a_3 = [new Among('al', -1, 1), new Among('el', -1, 2)];

StemmerHu.a_4 = [
  new Among('ba', -1, -1),
  new Among('ra', -1, -1),
  new Among('be', -1, -1),
  new Among('re', -1, -1),
  new Among('ig', -1, -1),
  new Among('nak', -1, -1),
  new Among('nek', -1, -1),
  new Among('val', -1, -1),
  new Among('vel', -1, -1),
  new Among('ul', -1, -1),
  new Among('n\u00E1l', -1, -1),
  new Among('n\u00E9l', -1, -1),
  new Among('b\u00F3l', -1, -1),
  new Among('r\u00F3l', -1, -1),
  new Among('t\u00F3l', -1, -1),
  new Among('b\u00F5l', -1, -1),
  new Among('r\u00F5l', -1, -1),
  new Among('t\u00F5l', -1, -1),
  new Among('\u00FCl', -1, -1),
  new Among('n', -1, -1),
  new Among('an', 19, -1),
  new Among('ban', 20, -1),
  new Among('en', 19, -1),
  new Among('ben', 22, -1),
  new Among('k\u00E9ppen', 22, -1),
  new Among('on', 19, -1),
  new Among('\u00F6n', 19, -1),
  new Among('k\u00E9pp', -1, -1),
  new Among('kor', -1, -1),
  new Among('t', -1, -1),
  new Among('at', 29, -1),
  new Among('et', 29, -1),
  new Among('k\u00E9nt', 29, -1),
  new Among('ank\u00E9nt', 32, -1),
  new Among('enk\u00E9nt', 32, -1),
  new Among('onk\u00E9nt', 32, -1),
  new Among('ot', 29, -1),
  new Among('\u00E9rt', 29, -1),
  new Among('\u00F6t', 29, -1),
  new Among('hez', -1, -1),
  new Among('hoz', -1, -1),
  new Among('h\u00F6z', -1, -1),
  new Among('v\u00E1', -1, -1),
  new Among('v\u00E9', -1, -1)
];

StemmerHu.a_5 = [
  new Among('\u00E1n', -1, 2),
  new Among('\u00E9n', -1, 1),
  new Among('\u00E1nk\u00E9nt', -1, 3)
];

StemmerHu.a_6 = [
  new Among('stul', -1, 2),
  new Among('astul', 0, 1),
  new Among('\u00E1stul', 0, 3),
  new Among('st\u00FCl', -1, 2),
  new Among('est\u00FCl', 3, 1),
  new Among('\u00E9st\u00FCl', 3, 4)
];

StemmerHu.a_7 = [new Among('\u00E1', -1, 1), new Among('\u00E9', -1, 2)];

StemmerHu.a_8 = [
  new Among('k', -1, 7),
  new Among('ak', 0, 4),
  new Among('ek', 0, 6),
  new Among('ok', 0, 5),
  new Among('\u00E1k', 0, 1),
  new Among('\u00E9k', 0, 2),
  new Among('\u00F6k', 0, 3)
];

StemmerHu.a_9 = [
  new Among('\u00E9i', -1, 7),
  new Among('\u00E1\u00E9i', 0, 6),
  new Among('\u00E9\u00E9i', 0, 5),
  new Among('\u00E9', -1, 9),
  new Among('k\u00E9', 3, 4),
  new Among('ak\u00E9', 4, 1),
  new Among('ek\u00E9', 4, 1),
  new Among('ok\u00E9', 4, 1),
  new Among('\u00E1k\u00E9', 4, 3),
  new Among('\u00E9k\u00E9', 4, 2),
  new Among('\u00F6k\u00E9', 4, 1),
  new Among('\u00E9\u00E9', 3, 8)
];

StemmerHu.a_10 = [
  new Among('a', -1, 18),
  new Among('ja', 0, 17),
  new Among('d', -1, 16),
  new Among('ad', 2, 13),
  new Among('ed', 2, 13),
  new Among('od', 2, 13),
  new Among('\u00E1d', 2, 14),
  new Among('\u00E9d', 2, 15),
  new Among('\u00F6d', 2, 13),
  new Among('e', -1, 18),
  new Among('je', 9, 17),
  new Among('nk', -1, 4),
  new Among('unk', 11, 1),
  new Among('\u00E1nk', 11, 2),
  new Among('\u00E9nk', 11, 3),
  new Among('\u00FCnk', 11, 1),
  new Among('uk', -1, 8),
  new Among('juk', 16, 7),
  new Among('\u00E1juk', 17, 5),
  new Among('\u00FCk', -1, 8),
  new Among('j\u00FCk', 19, 7),
  new Among('\u00E9j\u00FCk', 20, 6),
  new Among('m', -1, 12),
  new Among('am', 22, 9),
  new Among('em', 22, 9),
  new Among('om', 22, 9),
  new Among('\u00E1m', 22, 10),
  new Among('\u00E9m', 22, 11),
  new Among('o', -1, 18),
  new Among('\u00E1', -1, 19),
  new Among('\u00E9', -1, 20)
];

StemmerHu.a_11 = [
  new Among('id', -1, 10),
  new Among('aid', 0, 9),
  new Among('jaid', 1, 6),
  new Among('eid', 0, 9),
  new Among('jeid', 3, 6),
  new Among('\u00E1id', 0, 7),
  new Among('\u00E9id', 0, 8),
  new Among('i', -1, 15),
  new Among('ai', 7, 14),
  new Among('jai', 8, 11),
  new Among('ei', 7, 14),
  new Among('jei', 10, 11),
  new Among('\u00E1i', 7, 12),
  new Among('\u00E9i', 7, 13),
  new Among('itek', -1, 24),
  new Among('eitek', 14, 21),
  new Among('jeitek', 15, 20),
  new Among('\u00E9itek', 14, 23),
  new Among('ik', -1, 29),
  new Among('aik', 18, 26),
  new Among('jaik', 19, 25),
  new Among('eik', 18, 26),
  new Among('jeik', 21, 25),
  new Among('\u00E1ik', 18, 27),
  new Among('\u00E9ik', 18, 28),
  new Among('ink', -1, 20),
  new Among('aink', 25, 17),
  new Among('jaink', 26, 16),
  new Among('eink', 25, 17),
  new Among('jeink', 28, 16),
  new Among('\u00E1ink', 25, 18),
  new Among('\u00E9ink', 25, 19),
  new Among('aitok', -1, 21),
  new Among('jaitok', 32, 20),
  new Among('\u00E1itok', -1, 22),
  new Among('im', -1, 5),
  new Among('aim', 35, 4),
  new Among('jaim', 36, 1),
  new Among('eim', 35, 4),
  new Among('jeim', 38, 1),
  new Among('\u00E1im', 35, 2),
  new Among('\u00E9im', 35, 3)
];

StemmerHu.g_v = [
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
  1,
  17,
  52,
  14
];

module.exports = StemmerHu;
