"""
    list() + generator和list_comprehension都能得到list
    但使用list() + generator的写法比用list_comprehension更省内存, 执行速度快一点
"""
from sys import getsizeof as getsize
import time

list_comprehension_a = [i * 2 for i in range(1000000)]
generator_expression_a = (i * 2 for i in range(1000000))
generator_expression_list_a = list(generator_expression_a)
print(
    f"value: {len(list_comprehension_a)} | 使用列表生成式的size: {getsize(list_comprehension_a)}"
)
print(
    f"value: {len(generator_expression_list_a)} | 使用生成式+list()的size: {getsize(generator_expression_list_a)}"
)


start_time = time.time()
print(sum(list_comprehension_a))
end_time = time.time()
print(f"使用列表生成式的sum执行时间: {end_time - start_time} 秒")

start_time = time.time()
print(sum(generator_expression_list_a))
end_time = time.time()
print(f"使用生成器表达式的sum执行时间: {end_time - start_time} 秒")

# 用生成式做需要iterable方法的参数, 可以省略(), 更简洁
print(sum([x for x in range(3)]))
print(sum(x for x in range(3)))
