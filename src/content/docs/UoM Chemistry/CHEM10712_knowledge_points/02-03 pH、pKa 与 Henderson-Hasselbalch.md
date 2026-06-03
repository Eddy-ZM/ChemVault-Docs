---
title: '2.3 pH、pKa 与 Henderson-Hasselbalch'
---

# 2.3 pH、pKa 与 Henderson-Hasselbalch

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[02 水、pH、pKa 与生物分子的电荷状态|2. 水、pH、pKa 与生物分子的电荷状态]]
- 导航：上一节：[[02-02 Proton transfer 与 Grotthuss mechanism 质子转移与格罗图斯机理|2.2 Proton transfer 与 Grotthuss mechanism 质子转移与格罗图斯机理]]；下一节：[[02-04 Buffer|2.4 Buffer]]

## 详细内容

弱酸：

```text
HA <=> H+ + A-
Ka = [H+][A-]/[HA]
pH = pKa + log([A-]/[HA])
```

必须会用的判断：

- ==pH = pKa 时，[A-] = [HA]，即 50% 去质子化，50% 质子化。==
- ==pH 比 pKa 高 1，base/acid = 10。==
- ==pH 比 pKa 高 2，base/acid = 100。==
- ==pH 低于 pKa，质子化形式更多。==

例如 workshop 中 Tyr side chain pKa = 10，在 pH 12：

```text
log([Y-]/[YH]) = 12 - 10 = 2
[Y-]/[YH] = 100
```

所以 Tyr >99% 去质子化。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

Henderson-Hasselbalch 方程的真正用途是把 pH 和分子电荷联系起来。pKa 是一个平衡点：pH 等于 pKa 时，酸式和碱式浓度相等；pH 每高 1 个单位，碱式/酸式比例乘以 10。这是判断 amino acid side chain、termini、buffer 组成的基础。

注意 acid/base 的名称取决于共轭对。例如 carboxylic acid 的 acid form 是 COOH，base form 是 COO-；amine 的 acid form 是 NH3+，base form 是 NH2。很多错误来自只记“酸失去 H+ 带负电”，却忘了碱性基团的质子化形式本身带正电。

## 原文小点逐条解释

- **原文小点：** ==pH = pKa 时，[A-] = [HA]，即 50% 去质子化，50% 质子化。==
  - **讲解：** 这个小点是 pH/pKa 判断的一部分；先比较 pH 与 pKa，再决定质子化/去质子化比例和分子电荷。
- **原文小点：** ==pH 比 pKa 高 1，base/acid = 10。==
  - **讲解：** 这个小点是 pH/pKa 判断的一部分；先比较 pH 与 pKa，再决定质子化/去质子化比例和分子电荷。
- **原文小点：** ==pH 比 pKa 高 2，base/acid = 100。==
  - **讲解：** 这个小点是 pH/pKa 判断的一部分；先比较 pH 与 pKa，再决定质子化/去质子化比例和分子电荷。
- **原文小点：** ==pH 低于 pKa，质子化形式更多。==
  - **讲解：** 这个小点是 pH/pKa 判断的一部分；先比较 pH 与 pKa，再决定质子化/去质子化比例和分子电荷。

## 做题和复习时怎么用

计算题先写 pH - pKa，再把 log ratio 转为比例。若问 fraction protonated，要把比例转成分数：例如 base/acid = 100，则 acid fraction = 1/(100+1)。

## 常见误区

- 只背 pKa 数值，不判断哪种 protonation state 被稳定。
- 把 buffer capacity 误解为任何 pH 都一样强。

## 关联知识点

- [[03-03 20 种氨基酸的功能分组|氨基酸反应性]]
- [[08-08 Enzyme catalysis 的本质|酶催化]]

<!-- END_DETAILED_EXPLANATION -->
