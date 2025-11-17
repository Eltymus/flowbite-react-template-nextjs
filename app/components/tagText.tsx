type DescriptionProps = {
  description: string;
  Icon: React.ElementType<React.ComponentProps<"svg">>;
};

export function TagText({ Icon, description }: DescriptionProps) {
  {
    return (
      <div className="flex flex-row items-start gap-4">
        <div className="rounded-xl bg-purple-200 p-2">
          <Icon className="h-6 w-6 text-purple-800" />
        </div>
        <p>{description}</p>
      </div>
    );
  }
}
