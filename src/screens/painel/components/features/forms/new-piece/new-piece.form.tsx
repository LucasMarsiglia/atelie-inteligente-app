'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { useNewPieceContainer } from './new-piece-container';
import { SelectRoot } from '@/components/common/select-root/select-root';
import { Controller } from 'react-hook-form';

export function NewPieceForm() {
  const { form, handleSubmitForm, errors, isLoading, handleFileUpload, router } =
    useNewPieceContainer();

  console.log('form', errors);

  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)} className="grid grid-cols-3 gap-3">
      {/* Nome */}
      <Input
        id="name"
        htmlFor="name"
        label="Nome da Peça *"
        placeholder="Ex: Vaso Artesanal Terracota"
        {...form.register('name')}
        error={errors?.name?.message}
        className="col-span-3"
      />

      {/* Dimensões */}
      <div className="col-span-3">
        <Label>Dimensões (cm) *</Label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Input
              type="number"
              placeholder="Altura"
              step="0.01"
              {...form.register('dimensions.height')}
              error={errors?.dimensions?.height?.message}
            />
            <span className="text-xs text-gray-500">Altura</span>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Largura"
              step="0.01"
              {...form.register('dimensions.width')}
              error={errors?.dimensions?.width?.message}
            />
            <span className="text-xs text-gray-500">Largura</span>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Profundidade"
              step="0.01"
              {...form.register('dimensions.depth')}
              error={errors?.dimensions?.depth?.message}
            />
            <span className="text-xs text-gray-500">Profundidade</span>
          </div>
        </div>
      </div>

      {/* Material e Acabamento */}
      <div className="grid grid-cols-2 gap-3 col-span-3">
        <Input
          id="material"
          htmlFor="material"
          label="Material *"
          placeholder="Ex: Argila, Porcelana, Terracota"
          {...form.register('material')}
          error={errors?.material?.message}
        />
        <Input
          id="finish"
          htmlFor="finish"
          label="Acabamento *"
          placeholder="Ex: Esmaltado, Natural, Polido"
          {...form.register('finish')}
          error={errors?.finish?.message}
        />
      </div>

      {/* Estilo de Descrição */}
      {/* <div className="space-y-4 p-4 bg-orange-50 rounded-lg border border-orange-200 col-span-3">
        <Label>Escolher Estilo de Descrição</Label>
        <RadioGroup
        // value={descriptionStyle}
        // onValueChange={(value: DescriptionStyle) => setDescriptionStyle(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="limpo" id="limpo" />
            <Label htmlFor="limpo" className="cursor-pointer">
              Modelo Limpo - Direto e objetivo
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="envolvente" id="envolvente" />
            <Label htmlFor="envolvente" className="cursor-pointer">
              Modelo Envolvente - Com storytelling leve
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tecnico" id="tecnico" />
            <Label htmlFor="tecnico" className="cursor-pointer">
              Modelo Técnico - Especificações detalhadas
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="artistico" id="artistico" />
            <Label htmlFor="artistico" className="cursor-pointer">
              Modelo Artístico - Poético e sensorial
            </Label>
          </div>
        </RadioGroup>

        <Button
          type="button"
          variant="outline"
          onClick={handleGenerateDescriptions}
          className="w-full"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Gerar Opções de Descrição
        </Button>

        {generatedDescriptions.length > 0 && (
          <div className="space-y-3 mt-4">
            <Label>Escolha uma descrição:</Label>
            {generatedDescriptions.map((desc, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all ${selectedDescription === index ? 'border-orange-500 bg-white' : 'hover:border-orange-300'}`}
                onClick={() => setSelectedDescription(index)}
              >
                <CardContent className="pt-4">
                  <div className="flex items-start gap-2">
                    <RadioGroupItem
                      value={index.toString()}
                      checked={selectedDescription === index}
                    />
                    <p className="text-sm text-gray-700">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div> */}

      {/* Foto */}
      <div className="space-y-4 col-span-3">
        <Label>Foto da Peça</Label>

        <div className="flex gap-2">
          <Button type="button" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>

        <div className="space-y-2">
          <Input type="file" accept="image/*" onChange={handleFileUpload} />
          <p className="text-xs text-gray-500">
            Selecione uma imagem da galeria do seu dispositivo
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {form.watch('pieces_images')?.map((image, index) => (
            <div className="mt-4  h-[150px]" key={index}>
              <img
                src={image.photo_url}
                alt="Preview"
                className="w-full h-full rounded-lg shadow-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Disponibilidade */}
      <Controller
        name="availability"
        control={form.control}
        render={({ field }) => (
          <SelectRoot
            label="Disponibilidade *"
            placeholder="Informe a Disponibilidade"
            options={[
              { label: 'Em Estoque', value: 'em_estoque' },
              { label: 'Sob Encomenda', value: 'sob_encomenda' },
            ]}
            onValueChange={field.onChange}
            className="col-span-3"
            error={errors?.availability?.message}
          />
        )}
      />

      {/* CORREÇÃO 5: Campos de quantidade e prazo */}
      {true ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantidade em Estoque *</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              placeholder="Ex: 5"
              {...form.register('financial.stocks')}
              error={errors?.financial?.stocks?.message}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deliveryDays">Prazo de Entrega (dias) *</Label>
            <Input
              id="deliveryDays"
              type="number"
              min="1"
              placeholder="Ex: 7"
              {...form.register('financial.delivery_time')}
              error={errors?.financial?.delivery_time?.message}
            />
            <p className="text-xs text-gray-500">Tempo necessário para envio após a compra</p>
          </div>
        </>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="deliveryDays">Prazo de Produção (dias) *</Label>
          <Input
            id="deliveryDays"
            type="number"
            min="1"
            placeholder="Ex: 15"
            {...form.register('financial.delivery_time')}
          />
          <p className="text-xs text-gray-500">
            Tempo necessário para produzir a peça sob encomenda
          </p>
        </div>
      )}

      {/* Preço */}
      <Input
        id="price"
        htmlFor="price"
        type="number"
        label="Preço (R$) *"
        step="0.01"
        min="0"
        placeholder="Ex: 89.90"
        {...form.register('financial.price')}
        error={errors?.financial?.price?.message}
      />

      {/* Submit */}
      <div className="flex gap-4 pt-4 col-span-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push('/dashboard')}
          className="flex-1"
        >
          Cancelar
        </Button>

        <Button
          type="submit"
          disabled={isLoading}
          isLoading={isLoading}
          className="flex-1 col-span-2 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
        >
          Criar Peça
        </Button>
      </div>
    </form>
  );
}
