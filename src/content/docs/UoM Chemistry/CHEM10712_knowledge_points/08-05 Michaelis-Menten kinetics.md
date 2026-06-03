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

