var C = Object.defineProperty;
var S = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty,
  F = Object.prototype.propertyIsEnumerable;
var w = (e, t, a) =>
    t in e
      ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a),
  k = (e, t) => {
    for (var a in t || (t = {})) N.call(t, a) && w(e, a, t[a]);
    if (S) for (var a of S(t)) F.call(t, a) && w(e, a, t[a]);
    return e;
  };
import {
  o as d,
  c as r,
  a as o,
  t as c,
  w as $,
  v as I,
  F as g,
  r as _,
  b as p,
  h as q,
  p as f,
  d as D,
  e as O,
  f as A,
  n as T,
  g as u,
  i as L,
} from "./vendor.eca3727b.js";
const M = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const n of s)
      if (n.type === "childList")
        for (const l of n.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const n = {};
    return (
      s.integrity && (n.integrity = s.integrity),
      s.referrerpolicy && (n.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (n.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const n = a(s);
    fetch(s.href, n);
  }
};
M();
var v = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, s] of t) a[i] = s;
  return a;
};
const j = { class: "day-header" },
  J = { class: "day-of-week" },
  V = { class: "day" },
  W = {
    props: { date: { type: Date, required: !0 } },
    setup(e) {
      return (t, a) => (
        d(),
        r("div", j, [
          o(
            "div",
            J,
            c(e.date.toLocaleString("en-us", { weekday: "long" })),
            1
          ),
          o("div", V, c(e.date.getDate()), 1),
        ])
      );
    },
  };
var B = v(W, [["__scopeId", "data-v-0403d13d"]]);
const m = (e) => (f("data-v-42f9259e"), (e = e()), D(), e),
  H = { class: "activity dialog" },
  U = { class: "dialog-header" },
  E = { class: "dialog-body" },
  P = { class: "description" },
  Y = { class: "form-group" },
  R = m(() => o("i", { class: "far fa-list-alt" }, null, -1)),
  z = { class: "form-group" },
  K = ["onClick"],
  G = m(() => o("i", { class: "far fa-clock" }, null, -1)),
  Q = { class: "actions" },
  X = m(() => o("i", { class: "fa fa-trash" }, null, -1)),
  Z = [X];
function x(e) {
  return (t, a) => (
    d(),
    r("div", null, [
      o("div", {
        class: "dialog-background",
        onClick: a[0] || (a[0] = (...i) => e.onClose && e.onClose(...i)),
      }),
      o("div", H, [
        o("div", U, c(t.activity.id ? "Edit" : "Add") + " Activity ", 1),
        o("div", E, [
          o("div", P, " Add an activity on date: " + c(t.formatedDate), 1),
          o("div", Y, [
            $(
              o(
                "input",
                {
                  placeholder: "Activity Name",
                  type: "text",
                  class: "form-control",
                  id: "activity-name",
                  "onUpdate:modelValue":
                    a[1] || (a[1] = (i) => (t.activity.name = i)),
                },
                null,
                512
              ),
              [[I, t.activity.name]]
            ),
            R,
          ]),
          o("div", z, [
            $(
              o(
                "input",
                {
                  placeholder: "Duration",
                  type: "number",
                  class: "form-control",
                  id: "activity-duration",
                  "onUpdate:modelValue":
                    a[2] || (a[2] = (i) => (t.activity.duration = i)),
                },
                null,
                512
              ),
              [[I, t.activity.duration]]
            ),
            (d(!0),
            r(
              g,
              null,
              _(
                t.presetHours,
                (i) => (
                  d(),
                  r("div", { class: "preset-hours", key: i }, [
                    o(
                      "button",
                      {
                        class: "preset button",
                        onClick: (s) => (t.activity.duration = i),
                      },
                      c(i),
                      9,
                      K
                    ),
                  ])
                )
              ),
              128
            )),
            G,
          ]),
        ]),
        o("div", Q, [
          o(
            "button",
            {
              class: "button",
              onClick:
                a[3] || (a[3] = (...i) => t.addActivity && t.addActivity(...i)),
            },
            c(t.activity.id ? "Save" : "Add"),
            1
          ),
          t.activity.id
            ? (d(),
              r(
                "button",
                {
                  key: 0,
                  class: "trash button",
                  onClick:
                    a[4] ||
                    (a[4] = (...i) =>
                      t.deleteActivity && t.deleteActivity(...i)),
                },
                Z
              ))
            : p("", !0),
        ]),
      ]),
    ])
  );
}
const tt = {
    data() {
      let e;
      return (
        this.edittingActivity
          ? (e = this.edittingActivity)
          : (e = { name: "", duration: 0 }),
        { activity: e }
      );
    },
    computed: {
      formatedDate() {
        return q(this.date).format("MMM-DD");
      },
      presetHours() {
        return [1, 2, 4, 8];
      },
    },
    methods: {
      addActivity() {
        this.onSaveActivity(this.date, this.activity), this.onClose();
      },
      deleteActivity() {
        this.onDeleteActivity(this.date, this.activity), this.onClose();
      },
    },
  },
  et = Object.assign(tt, {
    props: {
      edittingActivity: { type: Object, required: !1 },
      onSaveActivity: { type: Function, required: !0 },
      onDeleteActivity: { type: Function, required: !1 },
      date: { type: Date, default: () => new Date() },
      onClose: { type: Function, default: () => {} },
    },
    setup: x,
  });
var b = v(et, [["__scopeId", "data-v-42f9259e"]]);
const it = (e) => (f("data-v-45d97359"), (e = e()), D(), e),
  at = it(() => o("span", null, "Add activity", -1)),
  st = [at];
function ot(e) {
  return (t, a) => (
    d(),
    r("div", null, [
      o(
        "a",
        {
          href: "#",
          class: "add-activity",
          onClick:
            a[0] || (a[0] = (...i) => t.showDialog && t.showDialog(...i)),
        },
        st
      ),
      t.showingDialog
        ? (d(),
          O(
            b,
            {
              key: 0,
              onSaveActivity: e.onAddActivity,
              onClose: t.hideDialog,
              date: e.date,
            },
            null,
            8,
            ["onSaveActivity", "onClose", "date"]
          ))
        : p("", !0),
    ])
  );
}
const nt = {
    data() {
      return { showingDialog: !1 };
    },
    methods: {
      showDialog() {
        this.showingDialog = !0;
      },
      hideDialog() {
        this.showingDialog = !1;
      },
    },
  },
  dt = Object.assign(nt, {
    props: {
      date: { type: Date, default: () => new Date() },
      onAddActivity: { type: Function, required: !0 },
    },
    setup: ot,
  });
var rt = v(dt, [["__scopeId", "data-v-45d97359"]]);
const lt = (e) => (f("data-v-70692425"), (e = e()), D(), e),
  ct = { class: "duration" },
  ut = lt(() => o("i", { class: "far fa-clock" }, null, -1)),
  vt = { class: "content" };
function yt(e) {
  return (t, a) => (
    d(),
    r("div", null, [
      o(
        "div",
        {
          class: "activity",
          onClick:
            a[0] || (a[0] = (...i) => t.showDialog && t.showDialog(...i)),
        },
        [
          o("div", ct, [ut, A(" " + c(e.activity.duration) + " hours ", 1)]),
          o("div", vt, c(e.activity.name), 1),
        ]
      ),
      t.showingDialog
        ? (d(),
          O(
            b,
            {
              key: 0,
              onSaveActivity: e.onSaveActivity,
              onDeleteActivity: e.onDeleteActivity,
              edittingActivity: e.activity,
              onClose: t.hideDialog,
              date: e.date,
            },
            null,
            8,
            [
              "onSaveActivity",
              "onDeleteActivity",
              "edittingActivity",
              "onClose",
              "date",
            ]
          ))
        : p("", !0),
    ])
  );
}
const ht = {
    data() {
      return { showingDialog: !1 };
    },
    methods: {
      showDialog() {
        this.showingDialog = !0;
      },
      hideDialog() {
        this.showingDialog = !1;
      },
    },
  },
  gt = Object.assign(ht, {
    props: {
      activity: { type: Object, required: !0 },
      onSaveActivity: { type: Function, required: !0 },
      onDeleteActivity: { type: Function, required: !0 },
      date: { type: Date, required: !0 },
    },
    setup: yt,
  });
var _t = v(gt, [["__scopeId", "data-v-70692425"]]);
function pt() {
  return window.URL.createObjectURL(new Blob([])).substr(-36);
}
class ft {
  async getTimeSheet(t, a) {
    let i = t;
    const s = [];
    for (let n = 0; n < a; n++) {
      const l = localStorage.getItem(i.toISOString());
      let h;
      l ? (h = JSON.parse(l)) : (h = []),
        s.push({ date: i, activities: h }),
        (i = new Date(i.getTime() + 864e5));
    }
    return s;
  }
  async updateActivity(t, a) {
    let i;
    const s = localStorage.getItem(t.toISOString());
    s ? (i = JSON.parse(s)) : (i = []);
    const n = i.findIndex((l) => l.id === a.id);
    (i[n] = a), localStorage.setItem(t.toISOString(), JSON.stringify(i));
  }
  async deleteActivity(t, a) {
    let i;
    const s = localStorage.getItem(t.toISOString());
    s ? (i = JSON.parse(s)) : (i = []);
    const n = i.findIndex((l) => l.id === a.id);
    i.splice(n, 1), localStorage.setItem(t.toISOString(), JSON.stringify(i));
  }
  async addActivity(t, a) {
    let i;
    const s = localStorage.getItem(t.toISOString());
    console.log("Saved data", s),
      s ? (i = JSON.parse(s)) : (i = []),
      i.push(k({ id: pt() }, a)),
      localStorage.setItem(t.toISOString(), JSON.stringify(i));
  }
}
var y = new ft();
const Dt = { class: "time-sheet" },
  At = { class: "header" },
  mt = o("i", { class: "fas fa-chevron-left" }, null, -1),
  St = A(" Previous week "),
  wt = [mt, St],
  kt = o("h1", null, "Time Sheet", -1),
  $t = A(" Next week "),
  It = o("i", { class: "fas fa-chevron-right" }, null, -1),
  Ot = [$t, It],
  bt = { class: "time-sheet-week" };
function Ct(e) {
  return (t, a) => (
    d(),
    r("div", Dt, [
      o("div", At, [
        o(
          "button",
          {
            onClick:
              a[0] || (a[0] = (...i) => t.previousWeek && t.previousWeek(...i)),
          },
          wt
        ),
        kt,
        o(
          "button",
          {
            onClick: a[1] || (a[1] = (...i) => t.nextWeek && t.nextWeek(...i)),
          },
          Ot
        ),
      ]),
      o("div", bt, [
        (d(!0),
        r(
          g,
          null,
          _(
            t.data,
            (i) => (
              d(),
              r(
                "div",
                {
                  class: T(["time-sheet-day", t.getDateClass(i.date)]),
                  key: i.date,
                },
                [
                  u(B, { date: i.date }, null, 8, ["date"]),
                  (d(!0),
                  r(
                    g,
                    null,
                    _(
                      i.activities,
                      (s) => (
                        d(),
                        r("div", { class: "time-sheet-day-content", key: s }, [
                          u(
                            _t,
                            {
                              activity: s,
                              date: i.date,
                              onSaveActivity: t.saveActivity,
                              onDeleteActivity: t.deleteActivity,
                            },
                            null,
                            8,
                            [
                              "activity",
                              "date",
                              "onSaveActivity",
                              "onDeleteActivity",
                            ]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                  u(
                    rt,
                    { date: i.date, onAddActivity: t.addActivity },
                    null,
                    8,
                    ["date", "onAddActivity"]
                  ),
                ],
                2
              )
            )
          ),
          128
        )),
      ]),
    ])
  );
}
function Nt() {
  const e = new Date();
  return new Date(e.getFullYear(), e.getMonth(), e.getDate() - e.getDay() + 1);
}
const Ft = {
    data() {
      return { startDate: Nt(), data: [] };
    },
    created() {
      this.reloadData();
    },
    methods: {
      async addActivity(e, t) {
        await y.addActivity(e, t), this.reloadData();
      },
      async saveActivity(e, t) {
        await y.updateActivity(e, t), this.reloadData();
      },
      async deleteActivity(e, t) {
        await y.deleteActivity(e, t), this.reloadData();
      },
      async reloadData() {
        try {
          (this.data = await y.getTimeSheet(this.startDate, 7)),
            console.log(this.data);
        } catch (e) {
          console.log(e);
        }
      },
      async nextWeek() {
        (this.startDate = new Date(
          this.startDate.getTime() + 7 * 24 * 60 * 60 * 1e3
        )),
          this.reloadData();
      },
      async previousWeek() {
        (this.startDate = new Date(
          this.startDate.getTime() - 7 * 24 * 60 * 60 * 1e3
        )),
          this.reloadData();
      },
      getDateClass(e) {
        const t = new Date();
        return e.getDay() === 0 || e.getDay() === 6
          ? "weekend"
          : e.getDate() === t.getDate() &&
            e.getMonth() === t.getMonth() &&
            e.getFullYear() === t.getFullYear()
          ? "today"
          : "";
      },
    },
  },
  qt = Object.assign(Ft, { setup: Ct });
const Tt = { id: "app" },
  Lt = {
    setup(e) {
      return (t, a) => (d(), r("div", Tt, [u(qt)]));
    },
  };
L(Lt).mount("#app");
