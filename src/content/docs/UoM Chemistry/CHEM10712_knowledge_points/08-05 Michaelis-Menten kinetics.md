---
title: '8.5 Michaelis-Menten kinetics'
---

# 8.5 Michaelis-Menten kinetics

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[08 酶：specificity、cofactors、allostery 与 kinetics|8. 酶：specificity、cofactors、allostery 与 kinetics]]
- 导航：上一节：[[08-04 Enzyme control 与 ATCase|8.4 Enzyme control 与 ATCase]]；下一节：[[08-06 如何从 MM plot 读参数|8.6 如何从 MM plot 读参数]]

## 详细内容

模型：

```text
E + S <=> ES -> E + P
```

常数：

- k1/kf：substrate binding，second-order。
- k-1/kr：substrate dissociation，first-order。
- k2/kcat：chemical step，first-order。

核心公式：

```text
v = kcat [E]T [S] / (Km + [S])
Vmax = kcat [E]T
```

参数理解：

- v：reaction velocity，product formation 或 substrate consumption rate。
- kcat：turnover number，每个 enzyme active site 每秒生成多少 product。
- Km：当 v = Vmax/2 时的 [S]；常被粗略视作 substrate affinity 指标，但严格上取决于机制。
- kcat/Km：catalytic efficiency，尤其适合比较低 [S] 下的酶表现。

MM model 假设/限制：

- single substrate。
- steady state。
- free ligand approximation: [S] ~ [S]0。
- 无 allosterism。
- 单一 irreversible chemical step。
- 不考虑复杂 intermediates/EP complex。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

Michaelis-Menten kinetics 把 enzyme saturation 行为定量化。低 [S] 时，大多数 enzyme free，v 近似随 [S] 线性增加；高 [S] 时 enzyme active sites 接近全被占据，v 接近 Vmax，再加 substrate 也不能显著加速。

Km 不是永远等于 Kd。只有在某些条件下，如 k-1 >> kcat，Km 才近似反映 binding affinity。一般 Km = (k-1 + kcat)/k1，包含 binding 和 catalytic step 信息。kcat/Km 则描述低 substrate 条件下 enzyme 捕获并转化 substrate 的综合效率。

## 原文小点逐条解释

- **原文小点：** k1/kf：substrate binding，second-order。
  - **讲解：** k1/kf 描述 E 与 S 结合生成 ES 的速度；因为碰撞双方是 E 和 S，所以是 second-order，速率项与 [E][S] 有关。
- **原文小点：** k-1/kr：substrate dissociation，first-order。
  - **讲解：** k-1/kr 描述 ES 解离回 E+S；这是单个 ES complex 的解离过程，所以是 first-order，速率项与 [ES] 有关。
- **原文小点：** k2/kcat：chemical step，first-order。
  - **讲解：** k2/kcat 是 ES 转化为 product 的化学步骤；在最简单 MM 模型中，它决定 enzyme 被 substrate 饱和时每个 active site 的最大周转速度。
- **原文小点：** v：reaction velocity，product formation 或 substrate consumption rate。
  - **讲解：** v 通常取 initial velocity，避免 product accumulation、reverse reaction 或 enzyme instability 干扰，因此能更直接反映 E+S -> product 的早期速率。
- **原文小点：** kcat：turnover number，每个 enzyme active site 每秒生成多少 product。
  - **讲解：** k2/kcat 是 ES 转化为 product 的化学步骤；在最简单 MM 模型中，它决定 enzyme 被 substrate 饱和时每个 active site 的最大周转速度。
- **原文小点：** Km：当 v = Vmax/2 时的 [S]；常被粗略视作 substrate affinity 指标，但严格上取决于机制。
  - **讲解：** Km 是 v 达到 Vmax/2 时的 substrate concentration；它常被当作 affinity indicator，但严格上还包含 catalysis 和 dissociation 的贡献。
- **原文小点：** kcat/Km：catalytic efficiency，尤其适合比较低 [S] 下的酶表现。
  - **讲解：** kcat/Km 描述低 substrate 条件下 enzyme 同时“结合并转化”substrate 的效率；当 [S] 远低于 Km 时，速率近似与 (kcat/Km)[E][S] 成正比。
- **原文小点：** single substrate。
  - **讲解：** single substrate 是模型简化；真实酶可能有多个 substrates、多步反应或 ordered/random binding mechanism。
- **原文小点：** steady state。
  - **讲解：** steady state approximation 指 [ES] 在初速阶段近似恒定，即 formation rate 和 breakdown rate 大致平衡。
- **原文小点：** free ligand approximation: [S] ~ [S]0。
  - **讲解：** free substrate approximation 假设 substrate 远多于 enzyme，被酶结合消耗的 S 很少，所以 [S]free 约等于加入的 [S]total。
- **原文小点：** 无 allosterism。
  - **讲解：** 无 allosterism 意味着曲线应为 hyperbolic saturation；若有 cooperative allostery，曲线可能变成 sigmoidal。
- **原文小点：** 单一 irreversible chemical step。
  - **讲解：** 这是 MM 模型的简化：初速条件下把 ES -> E+P 当成主要单向步骤；若反应可逆或包含多个化学中间体，就需要更复杂的速率方程。
- **原文小点：** 不考虑复杂 intermediates/EP complex。
  - **讲解：** MM 模型不显式处理复杂 intermediates；若中间体积累，就需要更复杂 kinetic model。

## 做题和复习时怎么用

写公式后解释物理意义：Vmax plateau, Km at half Vmax, kcat=Vmax/[E]T, kcat/Km compares catalytic efficiency. 图像题从 plateau 和 half-plateau 读数。

## 常见误区

- 说酶改变反应平衡，而不是降低 activation barrier。
- 把 Km 简单等同于 Kd，忽略 kinetic model 条件。

## 关联知识点

- [[03-03 20 种氨基酸的功能分组|active-site residues]]
- [[15-04 Directed evolution case sitagliptin transaminase|sitagliptin transaminase]]

<!-- END_DETAILED_EXPLANATION -->
