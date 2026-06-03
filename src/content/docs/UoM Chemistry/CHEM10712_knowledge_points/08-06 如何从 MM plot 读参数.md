---
title: '8.6 如何从 MM plot 读参数'
---

# 8.6 如何从 MM plot 读参数

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[08 酶：specificity、cofactors、allostery 与 kinetics|8. 酶：specificity、cofactors、allostery 与 kinetics]]
- 导航：上一节：[[08-05 Michaelis-Menten kinetics|8.5 Michaelis-Menten kinetics]]；下一节：[[08-07 Competitive inhibition 与 TSAs|8.7 Competitive inhibition 与 TSAs]]

## 详细内容

从 saturation curve：

- plateau 给 Vmax。
- Vmax 除以 [E]T 得 kcat。
- v = Vmax/2 时对应的 [S] 是 Km。

课件例子：

- enzyme A: kcat = 10 s^-1, Km = 10 uM，kcat/Km = 1.0 uM^-1 s^-1。
- enzyme B: kcat = 3 s^-1, Km = 2 uM，kcat/Km = 1.5 uM^-1 s^-1。
- 若以 catalytic efficiency 比较，B 更好。

Workshop 例子：

- condition 1: kcat = 1000 s^-1, Km = 1 mM，kcat/Km = 1000 s^-1 mM^-1。
- condition 2: kcat = 30 s^-1, Km = 0.1 mM，kcat/Km = 300 s^-1 mM^-1。
- condition 1 的 catalytic efficiency 更高。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

从 MM plot 读参数要先确认纵轴是什么。如果纵轴是 v，plateau 是 Vmax；如果纵轴已经是 V/[E] 或 kobs，则 plateau 可直接给 kcat。Km 是达到半最大速率时的 substrate concentration。

比较“better enzyme”要看问题条件。若 substrate 很高，kcat 大的 enzyme 可能更快；若 substrate 很低，kcat/Km 更能代表效率。课件例子中 kcat 较低但 Km 更低的 enzyme，可因 kcat/Km 更高而在低底物条件下更好。

## 原文小点逐条解释

- **原文小点：** plateau 给 Vmax。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** Vmax 除以 [E]T 得 kcat。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** v = Vmax/2 时对应的 [S] 是 Km。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** enzyme A: kcat = 10 s^-1, Km = 10 uM，kcat/Km = 1.0 uM^-1 s^-1。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** enzyme B: kcat = 3 s^-1, Km = 2 uM，kcat/Km = 1.5 uM^-1 s^-1。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** 若以 catalytic efficiency 比较，B 更好。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** condition 1: kcat = 1000 s^-1, Km = 1 mM，kcat/Km = 1000 s^-1 mM^-1。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** condition 2: kcat = 30 s^-1, Km = 0.1 mM，kcat/Km = 300 s^-1 mM^-1。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。
- **原文小点：** condition 1 的 catalytic efficiency 更高。
  - **讲解：** 这个小点是在说明如何从 MM plot 读 kcat、Km 或 kcat/Km；要先看坐标和 plateau/half-plateau。

## 做题和复习时怎么用

计算 kcat/Km 时统一单位。10 s^-1 / 10 uM = 1 uM^-1 s^-1；30 s^-1 / 2 uM = 15 uM^-1 s^-1，如果课件单位不同要按图中标注处理。

## 常见误区

- 说酶改变反应平衡，而不是降低 activation barrier。
- 把 Km 简单等同于 Kd，忽略 kinetic model 条件。

## 关联知识点

- [[03-03 20 种氨基酸的功能分组|active-site residues]]
- [[15-04 Directed evolution case sitagliptin transaminase|sitagliptin transaminase]]

<!-- END_DETAILED_EXPLANATION -->
