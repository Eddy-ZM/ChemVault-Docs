---
title: '5.2 Kd 与 ligand binding'
---
- 返回总讲义：[CHEM10712 slides 知识点整理与讲解](/uom-chemistry/chem10712/chem10712_slides_knowledge_notes_zh/)
- 知识点索引：[CHEM10712 知识点索引](/uom-chemistry/chem10712_knowledge_points/00-chem10712-知识点索引/)
- 上级章节：[5. Coiled-coil 与 protein-ligand binding](/uom-chemistry/chem10712_knowledge_points/05-coiled-coil-与-protein-ligand-binding/)
- 导航：上一节：[5.1 Coiled-coil 的 heptad repeat](/uom-chemistry/chem10712_knowledge_points/05-01-coiled-coil-的-heptad-repeat/)；下一节：[6.1 Carbohydrates/saccharides 的定义与分类](/uom-chemistry/chem10712_knowledge_points/06-01-carbohydrates-saccharides-的定义与分类/)

## 详细内容

基本平衡：

```text
P + L <=> PL
Kd = [P][L]/[PL]
```

理解：

- Kd 越小，binding 越强。
- 当 free ligand concentration = Kd 时，理想情况下约 50% protein bound。
- 若 ligand 远大于 protein，可近似 fractional binding = [L]/(Kd + [L])。
- 要达到 90% bound，在 free ligand 近似条件下需 [L]free = 9Kd。

但 workshop 特别提醒：当 protein concentration 不可忽略时，不能只用 total ligand = 9Kd；还要补足被 protein 结合掉的 ligand。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

Kd 是解离常数，描述 bound complex 倾向解离的程度。Kd 小表示在较低 free ligand concentration 下也能形成大量 PL，即 affinity 高。注意 Kd 使用的是 equilibrium free concentrations，不是简单 total concentrations。

在 ligand 远多于 protein 时，可以近似 fraction bound = [L]/(Kd+[L])。但如果 protein concentration 与 Kd 或 ligand concentration 同量级，bound ligand 会显著消耗 total ligand，必须用 mass balance；这正是 workshop 中 0.01 mM protein 和 10 mM protein 两类题的差别。

## 原文小点逐条解释

- **原文小点：** Kd 越小，binding 越强。
  - **讲解：** 这个小点属于 binding equilibrium；要区分 free ligand、bound ligand、total ligand，并用 Kd 判断 affinity 和 occupancy。
- **原文小点：** 当 free ligand concentration = Kd 时，理想情况下约 50% protein bound。
  - **讲解：** 这个小点属于 binding equilibrium；要区分 free ligand、bound ligand、total ligand，并用 Kd 判断 affinity 和 occupancy。
- **原文小点：** 若 ligand 远大于 protein，可近似 fractional binding = [L]/(Kd + [L])。
  - **讲解：** 这个小点属于 binding equilibrium；要区分 free ligand、bound ligand、total ligand，并用 Kd 判断 affinity 和 occupancy。
- **原文小点：** 要达到 90% bound，在 free ligand 近似条件下需 [L]free = 9Kd。
  - **讲解：** 这个小点属于 binding equilibrium；要区分 free ligand、bound ligand、total ligand，并用 Kd 判断 affinity 和 occupancy。

## 做题和复习时怎么用

90% binding 的快速判断是 [L]free = 9Kd；若 [P]total 不可忽略，则 total ligand 至少还要加上约 0.9[P]total。

## 常见误区

- 只背定义，不解释结构如何导致功能。
- 答题时缺少“因为...所以...”的因果链。

## 关联知识点

- [蛋白动力学](/uom-chemistry/chem10712_knowledge_points/04-07-稳定性与活性的-trade-off/)
- [Michaelis-Menten kinetics](/uom-chemistry/chem10712_knowledge_points/08-05-michaelis-menten-kinetics/)

<!-- END_DETAILED_EXPLANATION -->
